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
import * as $ from "asn1-ts/dist/node/functional";
import { OtherHash, _decode_OtherHash, _encode_OtherHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHash.ta";
export { OtherHash, _decode_OtherHash, _encode_OtherHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHash.ta";
import { CrlIdentifier, _decode_CrlIdentifier, _encode_CrlIdentifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlIdentifier.ta";
export { CrlIdentifier, _decode_CrlIdentifier, _encode_CrlIdentifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlIdentifier.ta";


/* START_OF_SYMBOL_DEFINITION CrlValidatedID */
/**
 * @summary CrlValidatedID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CrlValidatedID ::= SEQUENCE {
 *     crlHash         OtherHash,
 *     crlIdentifier   CrlIdentifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CrlValidatedID {
    constructor (
        /**
         * @summary `crlHash`.
         * @public
         * @readonly
         */
        readonly crlHash: OtherHash,
        /**
         * @summary `crlIdentifier`.
         * @public
         * @readonly
         */
        readonly crlIdentifier: OPTIONAL<CrlIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a CrlValidatedID
     * @description
     * 
     * This takes an `object` and converts it to a `CrlValidatedID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrlValidatedID`.
     * @returns {CrlValidatedID}
     */
    public static _from_object (_o: { [_K in keyof (CrlValidatedID)]: (CrlValidatedID)[_K] }): CrlValidatedID {
        return new CrlValidatedID(_o.crlHash, _o.crlIdentifier);
    }


}
/* END_OF_SYMBOL_DEFINITION CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrlValidatedID */
/**
 * @summary The Leading Root Component Types of CrlValidatedID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CrlValidatedID: $.ComponentSpec[] = [
    new $.ComponentSpec("crlHash", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("crlIdentifier", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrlValidatedID */
/**
 * @summary The Trailing Root Component Types of CrlValidatedID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CrlValidatedID: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrlValidatedID */
/**
 * @summary The Extension Addition Component Types of CrlValidatedID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CrlValidatedID: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrlValidatedID */
let _cached_decoder_for_CrlValidatedID: $.ASN1Decoder<CrlValidatedID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _decode_CrlValidatedID */
/**
 * @summary Decodes an ASN.1 element into a(n) CrlValidatedID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrlValidatedID} The decoded data structure.
 */
export
function _decode_CrlValidatedID (el: _Element) {
    if (!_cached_decoder_for_CrlValidatedID) { _cached_decoder_for_CrlValidatedID = function (el: _Element): CrlValidatedID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let crlHash!: OtherHash;
    let crlIdentifier: OPTIONAL<CrlIdentifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "crlHash": (_el: _Element): void => { crlHash = _decode_OtherHash(_el); },
        "crlIdentifier": (_el: _Element): void => { crlIdentifier = _decode_CrlIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CrlValidatedID,
        _extension_additions_list_spec_for_CrlValidatedID,
        _root_component_type_list_2_spec_for_CrlValidatedID,
        undefined,
    );
    return new CrlValidatedID( /* SEQUENCE_CONSTRUCTOR_CALL */
        crlHash,
        crlIdentifier
    );
}; }
    return _cached_decoder_for_CrlValidatedID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrlValidatedID */
let _cached_encoder_for_CrlValidatedID: $.ASN1Encoder<CrlValidatedID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrlValidatedID */

/* START_OF_SYMBOL_DEFINITION _encode_CrlValidatedID */
/**
 * @summary Encodes a(n) CrlValidatedID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrlValidatedID, encoded as an ASN.1 Element.
 */
export
function _encode_CrlValidatedID (value: CrlValidatedID, elGetter: $.ASN1Encoder<CrlValidatedID>) {
    if (!_cached_encoder_for_CrlValidatedID) { _cached_encoder_for_CrlValidatedID = function (value: CrlValidatedID, elGetter: $.ASN1Encoder<CrlValidatedID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_OtherHash(value.crlHash, $.BER),
            /* IF_ABSENT  */ ((value.crlIdentifier === undefined) ? undefined : _encode_CrlIdentifier(value.crlIdentifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CrlValidatedID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CrlValidatedID */

/* eslint-enable */
