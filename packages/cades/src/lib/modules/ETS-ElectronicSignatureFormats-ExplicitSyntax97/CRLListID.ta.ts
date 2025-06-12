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
import { CrlValidatedID, _decode_CrlValidatedID, _encode_CrlValidatedID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlValidatedID.ta.js";
export { CrlValidatedID, _decode_CrlValidatedID, _encode_CrlValidatedID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlValidatedID.ta.js";


/* START_OF_SYMBOL_DEFINITION CRLListID */
/**
 * @summary CRLListID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLListID ::= SEQUENCE {
 *     crls        SEQUENCE OF CrlValidatedID }
 * ```
 * 
 * @class
 */
export
class CRLListID {
    constructor (
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: CrlValidatedID[]
    ) {}

    /**
     * @summary Restructures an object into a CRLListID
     * @description
     * 
     * This takes an `object` and converts it to a `CRLListID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CRLListID`.
     * @returns {CRLListID}
     */
    public static _from_object (_o: { [_K in keyof (CRLListID)]: (CRLListID)[_K] }): CRLListID {
        return new CRLListID(_o.crls);
    }


}
/* END_OF_SYMBOL_DEFINITION CRLListID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CRLListID */
/**
 * @summary The Leading Root Component Types of CRLListID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CRLListID: $.ComponentSpec[] = [
    new $.ComponentSpec("crls", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CRLListID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CRLListID */
/**
 * @summary The Trailing Root Component Types of CRLListID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CRLListID: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CRLListID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CRLListID */
/**
 * @summary The Extension Addition Component Types of CRLListID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CRLListID: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CRLListID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLListID */
let _cached_decoder_for_CRLListID: $.ASN1Decoder<CRLListID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLListID */

/* START_OF_SYMBOL_DEFINITION _decode_CRLListID */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLListID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLListID} The decoded data structure.
 */
export
function _decode_CRLListID (el: _Element) {
    if (!_cached_decoder_for_CRLListID) { _cached_decoder_for_CRLListID = function (el: _Element): CRLListID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CRLListID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "crls";
    let crls!: CrlValidatedID[];
    crls = $._decodeSequenceOf<CrlValidatedID>(() => _decode_CrlValidatedID)(sequence[0]);
    return new CRLListID(
        crls,

    );
}; }
    return _cached_decoder_for_CRLListID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLListID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLListID */
let _cached_encoder_for_CRLListID: $.ASN1Encoder<CRLListID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLListID */

/* START_OF_SYMBOL_DEFINITION _encode_CRLListID */
/**
 * @summary Encodes a(n) CRLListID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLListID, encoded as an ASN.1 Element.
 */
export
function _encode_CRLListID (value: CRLListID, elGetter: $.ASN1Encoder<CRLListID>) {
    if (!_cached_encoder_for_CRLListID) { _cached_encoder_for_CRLListID = function (value: CRLListID, elGetter: $.ASN1Encoder<CRLListID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<CrlValidatedID>(() => _encode_CrlValidatedID, $.BER)(value.crls, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CRLListID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLListID */

/* eslint-enable */
