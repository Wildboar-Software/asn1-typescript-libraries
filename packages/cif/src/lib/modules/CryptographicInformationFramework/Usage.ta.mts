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
import { KeyUsage, KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */, digitalSignature /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_contentCommitment /* IMPORTED_LONG_NAMED_BIT */, contentCommitment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */, keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */, dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */, keyAgreement /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */, keyCertSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */, cRLSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */, encipherOnly /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */, decipherOnly /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsage, _encode_KeyUsage } from "../CertificateExtensions/KeyUsage.ta.mjs";
// export { KeyUsage, KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */, digitalSignature /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_contentCommitment /* IMPORTED_LONG_NAMED_BIT */, contentCommitment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */, keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */, dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */, keyAgreement /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */, keyCertSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */, cRLSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */, encipherOnly /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */, decipherOnly /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsage, _encode_KeyUsage } from "../CertificateExtensions/KeyUsage.ta.mjs";


/**
 * @summary Usage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage ::= SEQUENCE {
 *     keyUsage KeyUsage OPTIONAL,
 *     extKeyUsage SEQUENCE SIZE (1..MAX) OF OBJECT IDENTIFIER OPTIONAL,
 *     ...
 * }
 * (
 *     WITH COMPONENTS {..., keyUsage PRESENT}
 *     | WITH COMPONENTS {..., extKeyUsage PRESENT}
 * )
 * ```
 * 
 * @class
 */
export
class Usage {
    constructor (
        /**
         * @summary `keyUsage`.
         * @public
         * @readonly
         */
        readonly keyUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `extKeyUsage`.
         * @public
         * @readonly
         */
        readonly extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Usage
     * @description
     * 
     * This takes an `object` and converts it to a `Usage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Usage`.
     * @returns {Usage}
     */
    public static _from_object (_o: { [_K in keyof (Usage)]: (Usage)[_K] }): Usage {
        return new Usage(_o.keyUsage, _o.extKeyUsage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Usage: $.ComponentSpec[] = [
    new $.ComponentSpec("keyUsage", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extKeyUsage", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Usage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Usage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Usage: $.ASN1Decoder<Usage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Usage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Usage (el: _Element): Usage {
    if (!_cached_decoder_for_Usage) { _cached_decoder_for_Usage = function (el: _Element): Usage {
    let keyUsage: OPTIONAL<KeyUsage>;
    let extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keyUsage": (_el: _Element): void => { keyUsage = _decode_KeyUsage(_el); },
        "extKeyUsage": (_el: _Element): void => { extKeyUsage = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Usage,
        _extension_additions_list_spec_for_Usage,
        _root_component_type_list_2_spec_for_Usage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Usage(
        keyUsage,
        extKeyUsage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Usage(el);
}

let _cached_encoder_for_Usage: $.ASN1Encoder<Usage> | null = null;

/**
 * @summary Encodes a(n) Usage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage, encoded as an ASN.1 Element.
 */
export
function _encode_Usage (value: Usage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Usage) { _cached_encoder_for_Usage = function (value: Usage, elGetter: $.ASN1Encoder<Usage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyUsage === undefined) ? undefined : _encode_KeyUsage(value.keyUsage, $.BER)),
            /* IF_ABSENT  */ ((value.extKeyUsage === undefined) ? undefined : $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER)(value.extKeyUsage, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Usage(value, elGetter);
}


/* eslint-enable */
