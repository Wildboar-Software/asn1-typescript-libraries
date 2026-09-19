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
import { TLSPRFAlgorithm, _enum_for_TLSPRFAlgorithm, TLSPRFAlgorithm_rfc5246 /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc5246 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSPRFAlgorithm, _encode_TLSPRFAlgorithm } from "../TS33128Payloads/TLSPRFAlgorithm.ta.mjs";
// export { TLSPRFAlgorithm, _enum_for_TLSPRFAlgorithm, TLSPRFAlgorithm_rfc5246 /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc5246 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSPRFAlgorithm, _encode_TLSPRFAlgorithm } from "../TS33128Payloads/TLSPRFAlgorithm.ta.mjs";
import { TLSCipherSuite, _decode_TLSCipherSuite, _encode_TLSCipherSuite } from "../TS33128Payloads/TLSCipherSuite.ta.mjs";
// export { TLSCipherSuite, _decode_TLSCipherSuite, _encode_TLSCipherSuite } from "../TS33128Payloads/TLSCipherSuite.ta.mjs";
import { TLSCipherType, _enum_for_TLSCipherType, TLSCipherType_stream /* IMPORTED_LONG_ENUMERATION_ITEM */, stream /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCipherType_block /* IMPORTED_LONG_ENUMERATION_ITEM */, block /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCipherType_aead /* IMPORTED_LONG_ENUMERATION_ITEM */, aead /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSCipherType, _encode_TLSCipherType } from "../TS33128Payloads/TLSCipherType.ta.mjs";
// export { TLSCipherType, _enum_for_TLSCipherType, TLSCipherType_stream /* IMPORTED_LONG_ENUMERATION_ITEM */, stream /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCipherType_block /* IMPORTED_LONG_ENUMERATION_ITEM */, block /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCipherType_aead /* IMPORTED_LONG_ENUMERATION_ITEM */, aead /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSCipherType, _encode_TLSCipherType } from "../TS33128Payloads/TLSCipherType.ta.mjs";
import { TLSCompressionAlgorithm, _enum_for_TLSCompressionAlgorithm, TLSCompressionAlgorithm_null /* IMPORTED_LONG_ENUMERATION_ITEM */, null_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCompressionAlgorithm_deflate /* IMPORTED_LONG_ENUMERATION_ITEM */, deflate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSCompressionAlgorithm, _encode_TLSCompressionAlgorithm } from "../TS33128Payloads/TLSCompressionAlgorithm.ta.mjs";
// export { TLSCompressionAlgorithm, _enum_for_TLSCompressionAlgorithm, TLSCompressionAlgorithm_null /* IMPORTED_LONG_ENUMERATION_ITEM */, null_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLSCompressionAlgorithm_deflate /* IMPORTED_LONG_ENUMERATION_ITEM */, deflate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLSCompressionAlgorithm, _encode_TLSCompressionAlgorithm } from "../TS33128Payloads/TLSCompressionAlgorithm.ta.mjs";


/**
 * @summary TLS12UAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS12UAStarParams ::= SEQUENCE
 * {
 *     preMasterSecret       [1] OCTET STRING (SIZE(48)) OPTIONAL,
 *     masterSecret          [2] OCTET STRING (SIZE(48)),
 *     pRFAlgorithm          [3] TLSPRFAlgorithm,
 *     cipherSuite           [4] TLSCipherSuite,
 *     cipherType            [5] TLSCipherType,
 *     encKeyLength          [6] INTEGER (0..255),
 *     blockLength           [7] INTEGER (0..255),
 *     fixedIVLength         [8] INTEGER (0..255),
 *     recordIVLength        [9] INTEGER (0..255),
 *     macLength             [10] INTEGER (0..255),
 *     macKeyLength          [11] INTEGER (0..255),
 *     compressionAlgorithm  [12] TLSCompressionAlgorithm,
 *     clientRandom          [13] OCTET STRING (SIZE(32)),
 *     serverRandom          [14] OCTET STRING (SIZE(32)),
 *     clientSequenceNumber  [15] INTEGER,
 *     serverSequenceNumber  [16] INTEGER,
 *     sessionID             [17] OCTET STRING (SIZE(0..32)),
 *     tLSServerExtensions   [18] OCTET STRING (SIZE(0..65535)),
 *     tLSClientExtensions   [19] OCTET STRING (SIZE(0..65535)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TLS12UAStarParams {
    constructor (
        /**
         * @summary `preMasterSecret`.
         * @public
         * @readonly
         */
        readonly preMasterSecret: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `masterSecret`.
         * @public
         * @readonly
         */
        readonly masterSecret: OCTET_STRING,
        /**
         * @summary `pRFAlgorithm`.
         * @public
         * @readonly
         */
        readonly pRFAlgorithm: TLSPRFAlgorithm,
        /**
         * @summary `cipherSuite`.
         * @public
         * @readonly
         */
        readonly cipherSuite: TLSCipherSuite,
        /**
         * @summary `cipherType`.
         * @public
         * @readonly
         */
        readonly cipherType: TLSCipherType,
        /**
         * @summary `encKeyLength`.
         * @public
         * @readonly
         */
        readonly encKeyLength: INTEGER,
        /**
         * @summary `blockLength`.
         * @public
         * @readonly
         */
        readonly blockLength: INTEGER,
        /**
         * @summary `fixedIVLength`.
         * @public
         * @readonly
         */
        readonly fixedIVLength: INTEGER,
        /**
         * @summary `recordIVLength`.
         * @public
         * @readonly
         */
        readonly recordIVLength: INTEGER,
        /**
         * @summary `macLength`.
         * @public
         * @readonly
         */
        readonly macLength: INTEGER,
        /**
         * @summary `macKeyLength`.
         * @public
         * @readonly
         */
        readonly macKeyLength: INTEGER,
        /**
         * @summary `compressionAlgorithm`.
         * @public
         * @readonly
         */
        readonly compressionAlgorithm: TLSCompressionAlgorithm,
        /**
         * @summary `clientRandom`.
         * @public
         * @readonly
         */
        readonly clientRandom: OCTET_STRING,
        /**
         * @summary `serverRandom`.
         * @public
         * @readonly
         */
        readonly serverRandom: OCTET_STRING,
        /**
         * @summary `clientSequenceNumber`.
         * @public
         * @readonly
         */
        readonly clientSequenceNumber: INTEGER,
        /**
         * @summary `serverSequenceNumber`.
         * @public
         * @readonly
         */
        readonly serverSequenceNumber: INTEGER,
        /**
         * @summary `sessionID`.
         * @public
         * @readonly
         */
        readonly sessionID: OCTET_STRING,
        /**
         * @summary `tLSServerExtensions`.
         * @public
         * @readonly
         */
        readonly tLSServerExtensions: OCTET_STRING,
        /**
         * @summary `tLSClientExtensions`.
         * @public
         * @readonly
         */
        readonly tLSClientExtensions: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TLS12UAStarParams
     * @description
     * 
     * This takes an `object` and converts it to a `TLS12UAStarParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS12UAStarParams`.
     * @returns {TLS12UAStarParams}
     */
    public static _from_object (_o: { [_K in keyof (TLS12UAStarParams)]: (TLS12UAStarParams)[_K] }): TLS12UAStarParams {
        return new TLS12UAStarParams(_o.preMasterSecret, _o.masterSecret, _o.pRFAlgorithm, _o.cipherSuite, _o.cipherType, _o.encKeyLength, _o.blockLength, _o.fixedIVLength, _o.recordIVLength, _o.macLength, _o.macKeyLength, _o.compressionAlgorithm, _o.clientRandom, _o.serverRandom, _o.clientSequenceNumber, _o.serverSequenceNumber, _o.sessionID, _o.tLSServerExtensions, _o.tLSClientExtensions);
    }

        /**
         * @summary The enum used as the type of the component `pRFAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_pRFAlgorithm = _enum_for_TLSPRFAlgorithm;        /**
         * @summary The enum used as the type of the component `cipherType`
         * @public
         * @static
         */

    public static _enum_for_cipherType = _enum_for_TLSCipherType;        /**
         * @summary The enum used as the type of the component `compressionAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_compressionAlgorithm = _enum_for_TLSCompressionAlgorithm;
}

/**
 * @summary The Leading Root Component Types of TLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS12UAStarParams: $.ComponentSpec[] = [
    new $.ComponentSpec("preMasterSecret", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("masterSecret", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pRFAlgorithm", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cipherSuite", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cipherType", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("encKeyLength", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("blockLength", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("fixedIVLength", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordIVLength", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("macLength", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("macKeyLength", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("compressionAlgorithm", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("clientRandom", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("serverRandom", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("clientSequenceNumber", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("serverSequenceNumber", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sessionID", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("tLSServerExtensions", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("tLSClientExtensions", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of TLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS12UAStarParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS12UAStarParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS12UAStarParams: $.ASN1Decoder<TLS12UAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS12UAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS12UAStarParams (el: _Element): TLS12UAStarParams {
    if (!_cached_decoder_for_TLS12UAStarParams) { _cached_decoder_for_TLS12UAStarParams = function (el: _Element): TLS12UAStarParams {
    let preMasterSecret: OPTIONAL<OCTET_STRING>;
    let masterSecret!: OCTET_STRING;
    let pRFAlgorithm!: TLSPRFAlgorithm;
    let cipherSuite!: TLSCipherSuite;
    let cipherType!: TLSCipherType;
    let encKeyLength!: INTEGER;
    let blockLength!: INTEGER;
    let fixedIVLength!: INTEGER;
    let recordIVLength!: INTEGER;
    let macLength!: INTEGER;
    let macKeyLength!: INTEGER;
    let compressionAlgorithm!: TLSCompressionAlgorithm;
    let clientRandom!: OCTET_STRING;
    let serverRandom!: OCTET_STRING;
    let clientSequenceNumber!: INTEGER;
    let serverSequenceNumber!: INTEGER;
    let sessionID!: OCTET_STRING;
    let tLSServerExtensions!: OCTET_STRING;
    let tLSClientExtensions: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "preMasterSecret": (_el: _Element): void => { preMasterSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "masterSecret": (_el: _Element): void => { masterSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pRFAlgorithm": (_el: _Element): void => { pRFAlgorithm = $._decode_implicit<TLSPRFAlgorithm>(() => _decode_TLSPRFAlgorithm)(_el); },
        "cipherSuite": (_el: _Element): void => { cipherSuite = $._decode_implicit<TLSCipherSuite>(() => _decode_TLSCipherSuite)(_el); },
        "cipherType": (_el: _Element): void => { cipherType = $._decode_implicit<TLSCipherType>(() => _decode_TLSCipherType)(_el); },
        "encKeyLength": (_el: _Element): void => { encKeyLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "blockLength": (_el: _Element): void => { blockLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fixedIVLength": (_el: _Element): void => { fixedIVLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordIVLength": (_el: _Element): void => { recordIVLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "macLength": (_el: _Element): void => { macLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "macKeyLength": (_el: _Element): void => { macKeyLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "compressionAlgorithm": (_el: _Element): void => { compressionAlgorithm = $._decode_implicit<TLSCompressionAlgorithm>(() => _decode_TLSCompressionAlgorithm)(_el); },
        "clientRandom": (_el: _Element): void => { clientRandom = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serverRandom": (_el: _Element): void => { serverRandom = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "clientSequenceNumber": (_el: _Element): void => { clientSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serverSequenceNumber": (_el: _Element): void => { serverSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sessionID": (_el: _Element): void => { sessionID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLSServerExtensions": (_el: _Element): void => { tLSServerExtensions = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLSClientExtensions": (_el: _Element): void => { tLSClientExtensions = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TLS12UAStarParams,
        _extension_additions_list_spec_for_TLS12UAStarParams,
        _root_component_type_list_2_spec_for_TLS12UAStarParams,
        undefined,
    );
    return new TLS12UAStarParams(
        preMasterSecret,
        masterSecret,
        pRFAlgorithm,
        cipherSuite,
        cipherType,
        encKeyLength,
        blockLength,
        fixedIVLength,
        recordIVLength,
        macLength,
        macKeyLength,
        compressionAlgorithm,
        clientRandom,
        serverRandom,
        clientSequenceNumber,
        serverSequenceNumber,
        sessionID,
        tLSServerExtensions,
        tLSClientExtensions
    );
}; }
    return _cached_decoder_for_TLS12UAStarParams(el);
}

let _cached_encoder_for_TLS12UAStarParams: $.ASN1Encoder<TLS12UAStarParams> | null = null;

/**
 * @summary Encodes a(n) TLS12UAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS12UAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_TLS12UAStarParams (value: TLS12UAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS12UAStarParams) { _cached_encoder_for_TLS12UAStarParams = function (value: TLS12UAStarParams, elGetter: $.ASN1Encoder<TLS12UAStarParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.preMasterSecret === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.preMasterSecret, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.masterSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TLSPRFAlgorithm, $.BER)(value.pRFAlgorithm, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TLSCipherSuite, $.BER)(value.cipherSuite, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TLSCipherType, $.BER)(value.cipherType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.encKeyLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.blockLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.fixedIVLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.recordIVLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.macLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.macKeyLength, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_TLSCompressionAlgorithm, $.BER)(value.compressionAlgorithm, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.clientRandom, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.serverRandom, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.clientSequenceNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.serverSequenceNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.sessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.tLSServerExtensions, $.BER),
            /* IF_ABSENT  */ ((value.tLSClientExtensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.tLSClientExtensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS12UAStarParams(value, elGetter);
}


/* eslint-enable */
