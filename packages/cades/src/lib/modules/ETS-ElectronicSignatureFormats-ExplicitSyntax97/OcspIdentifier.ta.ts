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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ResponderID, _decode_ResponderID, _encode_ResponderID } from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/ResponderID.ta.js";
export { ResponderID, _decode_ResponderID, _encode_ResponderID } from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/ResponderID.ta.js";


/* START_OF_SYMBOL_DEFINITION OcspIdentifier */
/**
 * @summary OcspIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OcspIdentifier ::= SEQUENCE {
 *     ocspResponderID     ResponderID, -- As in OCSP response data
 *     producedAt          GeneralizedTime -- As in OCSP response data
 *     }
 * ```
 *
 * @class
 */
export
class OcspIdentifier {
    constructor (
        /**
         * @summary `ocspResponderID`.
         * @public
         * @readonly
         */
        readonly ocspResponderID: ResponderID,
        /**
         * @summary `producedAt`.
         * @public
         * @readonly
         */
        readonly producedAt: GeneralizedTime
    ) {}

    /**
     * @summary Restructures an object into a OcspIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `OcspIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OcspIdentifier`.
     * @returns {OcspIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (OcspIdentifier)]: (OcspIdentifier)[_K] }): OcspIdentifier {
        return new OcspIdentifier(_o.ocspResponderID, _o.producedAt);
    }


}
/* END_OF_SYMBOL_DEFINITION OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OcspIdentifier */
/**
 * @summary The Leading Root Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OcspIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("ocspResponderID", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("producedAt", false, $.hasTag(_TagClass.universal, 24), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OcspIdentifier */
/**
 * @summary The Trailing Root Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OcspIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OcspIdentifier */
/**
 * @summary The Extension Addition Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OcspIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OcspIdentifier */
let _cached_decoder_for_OcspIdentifier: $.ASN1Decoder<OcspIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_OcspIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) OcspIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OcspIdentifier} The decoded data structure.
 */
export
function _decode_OcspIdentifier (el: _Element) {
    if (!_cached_decoder_for_OcspIdentifier) { _cached_decoder_for_OcspIdentifier = function (el: _Element): OcspIdentifier {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OcspIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ocspResponderID";
    sequence[1].name = "producedAt";
    let ocspResponderID!: ResponderID;
    let producedAt!: GeneralizedTime;
    ocspResponderID = _decode_ResponderID(sequence[0]);
    producedAt = $._decodeGeneralizedTime(sequence[1]);
    return new OcspIdentifier(
        ocspResponderID,
        producedAt,

    );
}; }
    return _cached_decoder_for_OcspIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OcspIdentifier */
let _cached_encoder_for_OcspIdentifier: $.ASN1Encoder<OcspIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OcspIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_OcspIdentifier */
/**
 * @summary Encodes a(n) OcspIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OcspIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_OcspIdentifier (value: OcspIdentifier, elGetter: $.ASN1Encoder<OcspIdentifier>) {
    if (!_cached_encoder_for_OcspIdentifier) { _cached_encoder_for_OcspIdentifier = function (value: OcspIdentifier, elGetter: $.ASN1Encoder<OcspIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResponderID(value.ocspResponderID, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.producedAt, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OcspIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OcspIdentifier */

/* eslint-enable */
