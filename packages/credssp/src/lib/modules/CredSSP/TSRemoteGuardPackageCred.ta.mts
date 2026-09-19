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



/**
 * @summary TSRemoteGuardPackageCred
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRemoteGuardPackageCred ::= SEQUENCE {
 *     packageName    [0] OCTET STRING,
 *     credBuffer    [1] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class TSRemoteGuardPackageCred {
    constructor (
        /**
         * @summary `packageName`.
         * @public
         * @readonly
         */
        readonly packageName: OCTET_STRING,
        /**
         * @summary `credBuffer`.
         * @public
         * @readonly
         */
        readonly credBuffer: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TSRemoteGuardPackageCred
     * @description
     * 
     * This takes an `object` and converts it to a `TSRemoteGuardPackageCred`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRemoteGuardPackageCred`.
     * @returns {TSRemoteGuardPackageCred}
     */
    public static _from_object (_o: { [_K in keyof (TSRemoteGuardPackageCred)]: (TSRemoteGuardPackageCred)[_K] }): TSRemoteGuardPackageCred {
        return new TSRemoteGuardPackageCred(_o.packageName, _o.credBuffer);
    }


}

/**
 * @summary The Leading Root Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    new $.ComponentSpec("packageName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("credBuffer", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRemoteGuardPackageCred: $.ASN1Decoder<TSRemoteGuardPackageCred> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRemoteGuardPackageCred
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRemoteGuardPackageCred (el: _Element): TSRemoteGuardPackageCred {
    if (!_cached_decoder_for_TSRemoteGuardPackageCred) { _cached_decoder_for_TSRemoteGuardPackageCred = function (el: _Element): TSRemoteGuardPackageCred {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TSRemoteGuardPackageCred contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packageName";
    sequence[1].name = "credBuffer";
    let packageName!: OCTET_STRING;
    let credBuffer!: OCTET_STRING;
    packageName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    credBuffer = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TSRemoteGuardPackageCred(
        packageName,
        credBuffer,

    );
}; }
    return _cached_decoder_for_TSRemoteGuardPackageCred(el);
}

let _cached_encoder_for_TSRemoteGuardPackageCred: $.ASN1Encoder<TSRemoteGuardPackageCred> | null = null;

/**
 * @summary Encodes a(n) TSRemoteGuardPackageCred into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRemoteGuardPackageCred, encoded as an ASN.1 Element.
 */
export
function _encode_TSRemoteGuardPackageCred (value: TSRemoteGuardPackageCred, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRemoteGuardPackageCred) { _cached_encoder_for_TSRemoteGuardPackageCred = function (value: TSRemoteGuardPackageCred, elGetter: $.ASN1Encoder<TSRemoteGuardPackageCred>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.packageName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.credBuffer, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRemoteGuardPackageCred(value, elGetter);
}


/* eslint-enable */
