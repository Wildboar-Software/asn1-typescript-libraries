/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExecutionProblem, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-CS2-SCF-SDF-Operations/ExecutionProblem.ta.mjs";
// export { ExecutionProblem, ExecutionProblem_missingInputValues /* IMPORTED_LONG_NAMED_INTEGER */, missingInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ExecutionProblem_executionFailure /* IMPORTED_LONG_NAMED_INTEGER */, executionFailure /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-CS2-SCF-SDF-Operations/ExecutionProblem.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary executionError_ParameterType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * executionError-ParameterType-Type ::=
 * SET {
 *   problem [0] ExecutionProblem,
 *   COMPONENTS OF CommonResults
 * }
 * ```
 * 
 * @class
 */
export
class executionError_ParameterType_Type {
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: ExecutionProblem;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */;
    /**
     * @summary `performer`.
     * @public
     * @readonly
     */
    readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */;
    /**
     * @summary `aliasDereferenced`.
     * @public
     * @readonly
     */
    readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */;
    /**
     * @summary `notification`.
     * @public
     * @readonly
     */
    readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */;

    constructor (
        problem: ExecutionProblem,
        securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {
        this.problem = problem;
        this.securityParameters = securityParameters;
        this.performer = performer;
        this.aliasDereferenced = aliasDereferenced;
        this.notification = notification;
    }

    /**
     * @summary Restructures an object into a executionError_ParameterType_Type
     * @description
     * 
     * This takes an `object` and converts it to a `executionError_ParameterType_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `executionError_ParameterType_Type`.
     * @returns {executionError_ParameterType_Type}
     */
    public static _from_object (_o: { [_K in keyof (executionError_ParameterType_Type)]: (executionError_ParameterType_Type)[_K] }): executionError_ParameterType_Type {
        return new executionError_ParameterType_Type(_o.problem, _o.securityParameters, _o.performer, _o.aliasDereferenced, _o.notification);
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced () { return false; }
}

/**
 * @summary The Leading Root Component Types of executionError_ParameterType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_executionError_ParameterType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("performer", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("aliasDereferenced", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("notification", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of executionError_ParameterType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_executionError_ParameterType_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of executionError_ParameterType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_executionError_ParameterType_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_executionError_ParameterType_Type: $.ASN1Decoder<executionError_ParameterType_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) executionError_ParameterType_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_executionError_ParameterType_Type (el: _Element): executionError_ParameterType_Type {
    if (!_cached_decoder_for_executionError_ParameterType_Type) { _cached_decoder_for_executionError_ParameterType_Type = function (el: _Element): executionError_ParameterType_Type {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: ExecutionProblem;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let performer: OPTIONAL<DistinguishedName>;
    let aliasDereferenced: OPTIONAL<BOOLEAN> = executionError_ParameterType_Type._default_value_for_aliasDereferenced;
    let notification: OPTIONAL<Attribute[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<ExecutionProblem>(() => _decode_ExecutionProblem)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "performer": (_el: _Element): void => { performer = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "aliasDereferenced": (_el: _Element): void => { aliasDereferenced = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "notification": (_el: _Element): void => { notification = $._decode_explicit<Attribute[]>(() => $._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_executionError_ParameterType_Type,
        _extension_additions_list_spec_for_executionError_ParameterType_Type,
        _root_component_type_list_2_spec_for_executionError_ParameterType_Type,
        undefined,
    );
    return new executionError_ParameterType_Type( /* SET_CONSTRUCTOR_CALL */
        problem,
        securityParameters,
        performer,
        aliasDereferenced,
        notification
    );
}; }
    return _cached_decoder_for_executionError_ParameterType_Type(el);
}

let _cached_encoder_for_executionError_ParameterType_Type: $.ASN1Encoder<executionError_ParameterType_Type> | null = null;

/**
 * @summary Encodes a(n) executionError_ParameterType_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The executionError_ParameterType_Type, encoded as an ASN.1 Element.
 */
export
function _encode_executionError_ParameterType_Type (value: executionError_ParameterType_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_executionError_ParameterType_Type) { _cached_encoder_for_executionError_ParameterType_Type = function (value: executionError_ParameterType_Type, elGetter: $.ASN1Encoder<executionError_ParameterType_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ExecutionProblem, $.BER)(value.problem, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 30, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.performer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_DistinguishedName, $.BER)(value.performer, $.BER));
    }
    if (value.aliasDereferenced !== undefined && !$.deepEq(value.aliasDereferenced, executionError_ParameterType_Type._default_value_for_aliasDereferenced)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 28, () => $._encodeBoolean, $.BER)(value.aliasDereferenced, $.BER));
    }
    if (value.notification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.notification, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_executionError_ParameterType_Type(value, elGetter);
}


/* eslint-enable */
