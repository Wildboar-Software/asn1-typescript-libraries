/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
// export { TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
import { TargetIdentifierProvenance, _enum_for_TargetIdentifierProvenance, TargetIdentifierProvenance_lEAProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, lEAProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_observed /* IMPORTED_LONG_ENUMERATION_ITEM */, observed /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_matchedOn /* IMPORTED_LONG_ENUMERATION_ITEM */, matchedOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TargetIdentifierProvenance, _encode_TargetIdentifierProvenance } from "../TS33128Payloads/TargetIdentifierProvenance.ta.mjs";
// export { TargetIdentifierProvenance, _enum_for_TargetIdentifierProvenance, TargetIdentifierProvenance_lEAProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, lEAProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_observed /* IMPORTED_LONG_ENUMERATION_ITEM */, observed /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_matchedOn /* IMPORTED_LONG_ENUMERATION_ITEM */, matchedOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TargetIdentifierProvenance, _encode_TargetIdentifierProvenance } from "../TS33128Payloads/TargetIdentifierProvenance.ta.mjs";


/**
 * @summary IRITargetIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITargetIdentifier ::= SEQUENCE
 * {
 *     identifier                                          [1] TargetIdentifier,
 *     provenance                                          [2] TargetIdentifierProvenance OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRITargetIdentifier {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: TargetIdentifier,
        /**
         * @summary `provenance`.
         * @public
         * @readonly
         */
        readonly provenance: OPTIONAL<TargetIdentifierProvenance>
    ) {}

    /**
     * @summary Restructures an object into a IRITargetIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `IRITargetIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRITargetIdentifier`.
     * @returns {IRITargetIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (IRITargetIdentifier)]: (IRITargetIdentifier)[_K] }): IRITargetIdentifier {
        return new IRITargetIdentifier(_o.identifier, _o.provenance);
    }

        /**
         * @summary The enum used as the type of the component `provenance`
         * @public
         * @static
         */

    public static _enum_for_provenance = _enum_for_TargetIdentifierProvenance;
}

/**
 * @summary The Leading Root Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("provenance", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRITargetIdentifier: $.ASN1Decoder<IRITargetIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRITargetIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRITargetIdentifier (el: _Element): IRITargetIdentifier {
    if (!_cached_decoder_for_IRITargetIdentifier) { _cached_decoder_for_IRITargetIdentifier = function (el: _Element): IRITargetIdentifier {
    let identifier!: TargetIdentifier;
    let provenance: OPTIONAL<TargetIdentifierProvenance>;
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<TargetIdentifier>(() => _decode_TargetIdentifier)(_el); },
        "provenance": (_el: _Element): void => { provenance = $._decode_implicit<TargetIdentifierProvenance>(() => _decode_TargetIdentifierProvenance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRITargetIdentifier,
        _extension_additions_list_spec_for_IRITargetIdentifier,
        _root_component_type_list_2_spec_for_IRITargetIdentifier,
        undefined,
    );
    return new IRITargetIdentifier(
        identifier,
        provenance
    );
}; }
    return _cached_decoder_for_IRITargetIdentifier(el);
}

let _cached_encoder_for_IRITargetIdentifier: $.ASN1Encoder<IRITargetIdentifier> | null = null;

/**
 * @summary Encodes a(n) IRITargetIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRITargetIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_IRITargetIdentifier (value: IRITargetIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRITargetIdentifier) { _cached_encoder_for_IRITargetIdentifier = function (value: IRITargetIdentifier, elGetter: $.ASN1Encoder<IRITargetIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TargetIdentifier, $.BER)(value.identifier, $.BER),
            /* IF_ABSENT  */ ((value.provenance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TargetIdentifierProvenance, $.BER)(value.provenance, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IRITargetIdentifier(value, elGetter);
}


/* eslint-enable */
