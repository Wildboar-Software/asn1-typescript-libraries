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
import { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfile/PrivateEnterpriseNumber.ta.mjs";
export { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfile/PrivateEnterpriseNumber.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ManufacturerId */
/**
 * @summary ManufacturerId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManufacturerId ::= SEQUENCE {
 *     manufacturerIdentifier  PrivateEnterpriseNumber }
 * ```
 * 
 * @class
 */
export
class ManufacturerId {
    constructor (
        /**
         * @summary `manufacturerIdentifier`.
         * @public
         * @readonly
         */
        readonly manufacturerIdentifier: PrivateEnterpriseNumber
    ) {}

    /**
     * @summary Restructures an object into a ManufacturerId
     * @description
     * 
     * This takes an `object` and converts it to a `ManufacturerId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManufacturerId`.
     * @returns {ManufacturerId}
     */
    public static _from_object (_o: { [_K in keyof (ManufacturerId)]: (ManufacturerId)[_K] }): ManufacturerId {
        return new ManufacturerId(_o.manufacturerIdentifier);
    }


}
/* END_OF_SYMBOL_DEFINITION ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManufacturerId */
/**
 * @summary The Leading Root Component Types of ManufacturerId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManufacturerId: $.ComponentSpec[] = [
    new $.ComponentSpec("manufacturerIdentifier", false, $.hasTag(_TagClass.universal, 6), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManufacturerId */
/**
 * @summary The Trailing Root Component Types of ManufacturerId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManufacturerId: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManufacturerId */
/**
 * @summary The Extension Addition Component Types of ManufacturerId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManufacturerId: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManufacturerId */
let _cached_decoder_for_ManufacturerId: $.ASN1Decoder<ManufacturerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _decode_ManufacturerId */
/**
 * @summary Decodes an ASN.1 element into a(n) ManufacturerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManufacturerId} The decoded data structure.
 */
export
function _decode_ManufacturerId (el: _Element) {
    if (!_cached_decoder_for_ManufacturerId) { _cached_decoder_for_ManufacturerId = function (el: _Element): ManufacturerId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ManufacturerId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "manufacturerIdentifier";
    let manufacturerIdentifier!: PrivateEnterpriseNumber;
    manufacturerIdentifier = _decode_PrivateEnterpriseNumber(sequence[0]);
    return new ManufacturerId(
        manufacturerIdentifier,

    );
}; }
    return _cached_decoder_for_ManufacturerId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManufacturerId */
let _cached_encoder_for_ManufacturerId: $.ASN1Encoder<ManufacturerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManufacturerId */

/* START_OF_SYMBOL_DEFINITION _encode_ManufacturerId */
/**
 * @summary Encodes a(n) ManufacturerId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManufacturerId, encoded as an ASN.1 Element.
 */
export
function _encode_ManufacturerId (value: ManufacturerId, elGetter: $.ASN1Encoder<ManufacturerId>) {
    if (!_cached_encoder_for_ManufacturerId) { _cached_encoder_for_ManufacturerId = function (value: ManufacturerId, elGetter: $.ASN1Encoder<ManufacturerId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PrivateEnterpriseNumber(value.manufacturerIdentifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ManufacturerId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManufacturerId */

/* eslint-enable */
