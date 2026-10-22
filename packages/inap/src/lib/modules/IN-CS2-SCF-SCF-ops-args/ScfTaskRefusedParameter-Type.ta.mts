/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ScfTaskRefusedParameter_Type_reason, _decode_ScfTaskRefusedParameter_Type_reason, _encode_ScfTaskRefusedParameter_Type_reason, _enum_for_ScfTaskRefusedParameter_Type_reason } from "../IN-CS2-SCF-SCF-ops-args/ScfTaskRefusedParameter-Type-reason.ta.mjs";
// export { ScfTaskRefusedParameter_Type_reason, _enum_for_ScfTaskRefusedParameter_Type_reason, ScfTaskRefusedParameter_Type_reason_generic /* IMPORTED_LONG_ENUMERATION_ITEM */, generic /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScfTaskRefusedParameter_Type_reason_unobtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, unobtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScfTaskRefusedParameter_Type_reason_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ScfTaskRefusedParameter_Type_reason, _encode_ScfTaskRefusedParameter_Type_reason } from "../IN-CS2-SCF-SCF-ops-args/ScfTaskRefusedParameter-Type-reason.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary ScfTaskRefusedParameter_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ScfTaskRefusedParameter_Type {
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: ScfTaskRefusedParameter_Type_reason;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;

    constructor (
        reason: ScfTaskRefusedParameter_Type_reason,
        securityParameters: OPTIONAL<SecurityParameters>
    ) {
        this.reason = reason;
        this.securityParameters = securityParameters;
    }

    /**
     * @summary Restructures an object into a ScfTaskRefusedParameter_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ScfTaskRefusedParameter_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScfTaskRefusedParameter_Type`.
     * @returns {ScfTaskRefusedParameter_Type}
     */
    public static _from_object (_o: { [_K in keyof (ScfTaskRefusedParameter_Type)]: (ScfTaskRefusedParameter_Type)[_K] }): ScfTaskRefusedParameter_Type {
        return new ScfTaskRefusedParameter_Type(_o.reason, _o.securityParameters);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_ScfTaskRefusedParameter_Type_reason;
}

/**
 * @summary The Leading Root Component Types of ScfTaskRefusedParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScfTaskRefusedParameter_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("reason", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ScfTaskRefusedParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScfTaskRefusedParameter_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScfTaskRefusedParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScfTaskRefusedParameter_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScfTaskRefusedParameter_Type: $.ASN1Decoder<ScfTaskRefusedParameter_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScfTaskRefusedParameter_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScfTaskRefusedParameter_Type (el: _Element): ScfTaskRefusedParameter_Type {
    if (!_cached_decoder_for_ScfTaskRefusedParameter_Type) { _cached_decoder_for_ScfTaskRefusedParameter_Type = function (el: _Element): ScfTaskRefusedParameter_Type {
    let reason!: ScfTaskRefusedParameter_Type_reason;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "reason": (_el: _Element): void => { reason = _decode_ScfTaskRefusedParameter_Type_reason(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScfTaskRefusedParameter_Type,
        _extension_additions_list_spec_for_ScfTaskRefusedParameter_Type,
        _root_component_type_list_2_spec_for_ScfTaskRefusedParameter_Type,
        undefined,
    );
    return new ScfTaskRefusedParameter_Type(
        reason,
        securityParameters
    );
}; }
    return _cached_decoder_for_ScfTaskRefusedParameter_Type(el);
}

let _cached_encoder_for_ScfTaskRefusedParameter_Type: $.ASN1Encoder<ScfTaskRefusedParameter_Type> | null = null;

/**
 * @summary Encodes a(n) ScfTaskRefusedParameter_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScfTaskRefusedParameter_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ScfTaskRefusedParameter_Type (value: ScfTaskRefusedParameter_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScfTaskRefusedParameter_Type) { _cached_encoder_for_ScfTaskRefusedParameter_Type = function (value: ScfTaskRefusedParameter_Type, elGetter: $.ASN1Encoder<ScfTaskRefusedParameter_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ScfTaskRefusedParameter_Type_reason(value.reason, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScfTaskRefusedParameter_Type(value, elGetter);
}


/* eslint-enable */
