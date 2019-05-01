import PropTypes from "prop-types";

function Conditional(props) {
    const ObjectReturn = (componentIf, componentElse) => ({
        componentIf,
        componentElse
    });

    function parseArray(arr) {
        const ifComponentIndex = arr.findIndex(
            value => value.props["data-types"] === "if"
        );
        const elseComponentIndex = arr.findIndex(
            value => value.props["data-types"] === "else"
        );
        return ObjectReturn(arr[ifComponentIndex], arr[elseComponentIndex]);
    }

    function parseObject(obj) {
        return ObjectReturn(obj, null);
    }

    function checkTypes(target) {
        return Array.isArray(target) ? parseArray(target) : parseObject(target);
    }

    function returnElement(render) {
        return render;
    }

    function getReturn(target, condition) {
        return condition === true
            ? returnElement(checkTypes(target).componentIf)
            : returnElement(checkTypes(target).componentElse);
    }

    return getReturn(props.children, props.cond);
}

Conditional.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    cond: PropTypes.bool
};

export { Conditional };
