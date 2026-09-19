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
import { TSRemoteGuardPackageCred, _decode_TSRemoteGuardPackageCred, _encode_TSRemoteGuardPackageCred } from "../CredSSP/TSRemoteGuardPackageCred.ta.mjs";
// export { TSRemoteGuardPackageCred, _decode_TSRemoteGuardPackageCred, _encode_TSRemoteGuardPackageCred } from "../CredSSP/TSRemoteGuardPackageCred.ta.mjs";


/**
 * @summary TSRemoteGuardCreds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRemoteGuardCreds ::= SEQUENCE {
 *     logonCred        [0] TSRemoteGuardPackageCred,
 *     supplementalCreds    [1] SEQUENCE OF TSRemoteGuardPackageCred OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSRemoteGuardCreds {
    constructor (
        /**
         * @summary `logonCred`.
         * @public
         * @readonly
         */
        readonly logonCred: TSRemoteGuardPackageCred,
        /**
         * @summary `supplementalCreds`.
         * @public
         * @readonly
         */
        readonly supplementalCreds: OPTIONAL<TSRemoteGuardPackageCred[]>
    ) {}

    /**
     * @summary Restructures an object into a TSRemoteGuardCreds
     * @description
     * 
     * This takes an `object` and converts it to a `TSRemoteGuardCreds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRemoteGuardCreds`.
     * @returns {TSRemoteGuardCreds}
     */
    public static _from_object (_o: { [_K in keyof (TSRemoteGuardCreds)]: (TSRemoteGuardCreds)[_K] }): TSRemoteGuardCreds {
        return new TSRemoteGuardCreds(_o.logonCred, _o.supplementalCreds);
    }


}

/**
 * @summary The Leading Root Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    new $.ComponentSpec("logonCred", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supplementalCreds", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRemoteGuardCreds: $.ASN1Decoder<TSRemoteGuardCreds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRemoteGuardCreds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRemoteGuardCreds (el: _Element): TSRemoteGuardCreds {
    if (!_cached_decoder_for_TSRemoteGuardCreds) { _cached_decoder_for_TSRemoteGuardCreds = function (el: _Element): TSRemoteGuardCreds {
    let logonCred!: TSRemoteGuardPackageCred;
    let supplementalCreds: OPTIONAL<TSRemoteGuardPackageCred[]>;
    const callbacks: $.DecodingMap = {
        "logonCred": (_el: _Element): void => { logonCred = $._decode_explicit<TSRemoteGuardPackageCred>(() => _decode_TSRemoteGuardPackageCred)(_el); },
        "supplementalCreds": (_el: _Element): void => { supplementalCreds = $._decode_explicit<TSRemoteGuardPackageCred[]>(() => $._decodeSequenceOf<TSRemoteGuardPackageCred>(() => _decode_TSRemoteGuardPackageCred))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSRemoteGuardCreds,
        _extension_additions_list_spec_for_TSRemoteGuardCreds,
        _root_component_type_list_2_spec_for_TSRemoteGuardCreds,
        undefined,
    );
    return new TSRemoteGuardCreds(
        logonCred,
        supplementalCreds
    );
}; }
    return _cached_decoder_for_TSRemoteGuardCreds(el);
}

let _cached_encoder_for_TSRemoteGuardCreds: $.ASN1Encoder<TSRemoteGuardCreds> | null = null;

/**
 * @summary Encodes a(n) TSRemoteGuardCreds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRemoteGuardCreds, encoded as an ASN.1 Element.
 */
export
function _encode_TSRemoteGuardCreds (value: TSRemoteGuardCreds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRemoteGuardCreds) { _cached_encoder_for_TSRemoteGuardCreds = function (value: TSRemoteGuardCreds, elGetter: $.ASN1Encoder<TSRemoteGuardCreds>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TSRemoteGuardPackageCred, $.BER)(value.logonCred, $.BER),
            /* IF_ABSENT  */ ((value.supplementalCreds === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<TSRemoteGuardPackageCred>(() => _encode_TSRemoteGuardPackageCred, $.BER), $.BER)(value.supplementalCreds, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRemoteGuardCreds(value, elGetter);
}


/* eslint-enable */
