/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";
// export { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";
import { Single_use_of_reference, _decode_Single_use_of_reference, _encode_Single_use_of_reference } from "../DOR-definition/Single-use-of-reference.ta.mjs";
// export { Single_use_of_reference, _decode_Single_use_of_reference, _encode_Single_use_of_reference } from "../DOR-definition/Single-use-of-reference.ta.mjs";


/**
 * @summary Extend_QoS
 * @description
 *
 * DOR extend-QoS (ISO/IEC 10031-2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extend-QoS ::= SEQUENCE {
 *   qoS-level           [0]  Requested-QoS-level OPTIONAL,
 *   -- if omitted, no change required
 *   usage-of-reference  Single-use-of-reference OPTIONAL
 *   -- if omitted, no change required
 * }
 * ```
 * 
 * @class
 */
export
class Extend_QoS {
    constructor (
        /**
         * @summary `qoS_level`.
         * @public
         * @readonly
         */
        readonly qoS_level: OPTIONAL<Requested_QoS_level>,
        /**
         * @summary `usage_of_reference`.
         * @public
         * @readonly
         */
        readonly usage_of_reference: OPTIONAL<Single_use_of_reference>
    ) {}

    /**
     * @summary Restructures an object into a Extend_QoS
     * @description
     * 
     * This takes an `object` and converts it to a `Extend_QoS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extend_QoS`.
     * @returns {Extend_QoS}
     */
    public static _from_object (_o: { [_K in keyof (Extend_QoS)]: (Extend_QoS)[_K] }): Extend_QoS {
        return new Extend_QoS(_o.qoS_level, _o.usage_of_reference);
    }


}

/**
 * @summary The Leading Root Component Types of Extend_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Extend_QoS: $.ComponentSpec[] = [
    new $.ComponentSpec("qoS-level", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("usage-of-reference", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of Extend_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Extend_QoS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Extend_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Extend_QoS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Extend_QoS: $.ASN1Decoder<Extend_QoS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extend_QoS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Extend_QoS (el: _Element): Extend_QoS {
    if (!_cached_decoder_for_Extend_QoS) { _cached_decoder_for_Extend_QoS = function (el: _Element): Extend_QoS {
    let qoS_level: OPTIONAL<Requested_QoS_level>;
    let usage_of_reference: OPTIONAL<Single_use_of_reference>;
    const callbacks: $.DecodingMap = {
        "qoS-level": (_el: _Element): void => { qoS_level = $._decode_explicit<Requested_QoS_level>(() => _decode_Requested_QoS_level)(_el); },
        "usage-of-reference": (_el: _Element): void => { usage_of_reference = _decode_Single_use_of_reference(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Extend_QoS,
        _extension_additions_list_spec_for_Extend_QoS,
        _root_component_type_list_2_spec_for_Extend_QoS,
        undefined,
    );
    return new Extend_QoS(
        qoS_level,
        usage_of_reference
    );
}; }
    return _cached_decoder_for_Extend_QoS(el);
}

let _cached_encoder_for_Extend_QoS: $.ASN1Encoder<Extend_QoS> | null = null;

/**
 * @summary Encodes a(n) Extend_QoS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extend_QoS, encoded as an ASN.1 Element.
 */
export
function _encode_Extend_QoS (value: Extend_QoS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Extend_QoS) { _cached_encoder_for_Extend_QoS = function (value: Extend_QoS): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.qoS_level === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Requested_QoS_level, $.BER)(value.qoS_level, $.BER)),
            /* IF_ABSENT  */ ((value.usage_of_reference === undefined) ? undefined : _encode_Single_use_of_reference(value.usage_of_reference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Extend_QoS(value, elGetter);
}


/* eslint-enable */
