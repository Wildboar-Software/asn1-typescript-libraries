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



/**
 * @summary MaxLengthParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLengthParameters ::= SEQUENCE
 * {     accountInfo                 INTEGER (0..32),
 *     authCode                 INTEGER (0..32),
 *     agentID                 INTEGER (0..32),
 *     agentPassword                 INTEGER (0..32),
 *     callIDInConnectionID             INTEGER (0..8),
 *     correlatorData                 INTEGER (0..32),
 *     privateData                 INTEGER,
 *     deviceIdentifiers             INTEGER (0..128),
 *     userData                 INTEGER (0..256),
 *     buttonLabel                 INTEGER (0..64),
 *     lampLabel                 INTEGER (0..64),
 *     charactersToSend             INTEGER (0..64) }
 * ```
 * 
 * @class
 */
export
class MaxLengthParameters {
    constructor (
        /**
         * @summary `accountInfo`.
         * @public
         * @readonly
         */
        readonly accountInfo: INTEGER,
        /**
         * @summary `authCode`.
         * @public
         * @readonly
         */
        readonly authCode: INTEGER,
        /**
         * @summary `agentID`.
         * @public
         * @readonly
         */
        readonly agentID: INTEGER,
        /**
         * @summary `agentPassword`.
         * @public
         * @readonly
         */
        readonly agentPassword: INTEGER,
        /**
         * @summary `callIDInConnectionID`.
         * @public
         * @readonly
         */
        readonly callIDInConnectionID: INTEGER,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: INTEGER,
        /**
         * @summary `privateData`.
         * @public
         * @readonly
         */
        readonly privateData: INTEGER,
        /**
         * @summary `deviceIdentifiers`.
         * @public
         * @readonly
         */
        readonly deviceIdentifiers: INTEGER,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: INTEGER,
        /**
         * @summary `buttonLabel`.
         * @public
         * @readonly
         */
        readonly buttonLabel: INTEGER,
        /**
         * @summary `lampLabel`.
         * @public
         * @readonly
         */
        readonly lampLabel: INTEGER,
        /**
         * @summary `charactersToSend`.
         * @public
         * @readonly
         */
        readonly charactersToSend: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a MaxLengthParameters
     * @description
     * 
     * This takes an `object` and converts it to a `MaxLengthParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MaxLengthParameters`.
     * @returns {MaxLengthParameters}
     */
    public static _from_object (_o: { [_K in keyof (MaxLengthParameters)]: (MaxLengthParameters)[_K] }): MaxLengthParameters {
        return new MaxLengthParameters(_o.accountInfo, _o.authCode, _o.agentID, _o.agentPassword, _o.callIDInConnectionID, _o.correlatorData, _o.privateData, _o.deviceIdentifiers, _o.userData, _o.buttonLabel, _o.lampLabel, _o.charactersToSend);
    }


}

/**
 * @summary The Leading Root Component Types of MaxLengthParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MaxLengthParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("accountInfo", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("authCode", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("agentID", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("agentPassword", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("callIDInConnectionID", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("correlatorData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("privateData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("deviceIdentifiers", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("userData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("buttonLabel", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("lampLabel", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("charactersToSend", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MaxLengthParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MaxLengthParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MaxLengthParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MaxLengthParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MaxLengthParameters: $.ASN1Decoder<MaxLengthParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxLengthParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaxLengthParameters (el: _Element): MaxLengthParameters {
    if (!_cached_decoder_for_MaxLengthParameters) { _cached_decoder_for_MaxLengthParameters = function (el: _Element): MaxLengthParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 12) {
        throw new _ConstructionError("MaxLengthParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accountInfo";
    sequence[1].name = "authCode";
    sequence[2].name = "agentID";
    sequence[3].name = "agentPassword";
    sequence[4].name = "callIDInConnectionID";
    sequence[5].name = "correlatorData";
    sequence[6].name = "privateData";
    sequence[7].name = "deviceIdentifiers";
    sequence[8].name = "userData";
    sequence[9].name = "buttonLabel";
    sequence[10].name = "lampLabel";
    sequence[11].name = "charactersToSend";
    let accountInfo!: INTEGER;
    let authCode!: INTEGER;
    let agentID!: INTEGER;
    let agentPassword!: INTEGER;
    let callIDInConnectionID!: INTEGER;
    let correlatorData!: INTEGER;
    let privateData!: INTEGER;
    let deviceIdentifiers!: INTEGER;
    let userData!: INTEGER;
    let buttonLabel!: INTEGER;
    let lampLabel!: INTEGER;
    let charactersToSend!: INTEGER;
    accountInfo = $._decodeInteger(sequence[0]);
    authCode = $._decodeInteger(sequence[1]);
    agentID = $._decodeInteger(sequence[2]);
    agentPassword = $._decodeInteger(sequence[3]);
    callIDInConnectionID = $._decodeInteger(sequence[4]);
    correlatorData = $._decodeInteger(sequence[5]);
    privateData = $._decodeInteger(sequence[6]);
    deviceIdentifiers = $._decodeInteger(sequence[7]);
    userData = $._decodeInteger(sequence[8]);
    buttonLabel = $._decodeInteger(sequence[9]);
    lampLabel = $._decodeInteger(sequence[10]);
    charactersToSend = $._decodeInteger(sequence[11]);
    return new MaxLengthParameters(
        accountInfo,
        authCode,
        agentID,
        agentPassword,
        callIDInConnectionID,
        correlatorData,
        privateData,
        deviceIdentifiers,
        userData,
        buttonLabel,
        lampLabel,
        charactersToSend,

    );
}; }
    return _cached_decoder_for_MaxLengthParameters(el);
}

let _cached_encoder_for_MaxLengthParameters: $.ASN1Encoder<MaxLengthParameters> | null = null;

/**
 * @summary Encodes a(n) MaxLengthParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxLengthParameters, encoded as an ASN.1 Element.
 */
export
function _encode_MaxLengthParameters (value: MaxLengthParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaxLengthParameters) { _cached_encoder_for_MaxLengthParameters = function (value: MaxLengthParameters, elGetter: $.ASN1Encoder<MaxLengthParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.accountInfo, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.authCode, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.agentID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.agentPassword, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callIDInConnectionID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.correlatorData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.privateData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.deviceIdentifiers, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.userData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.buttonLabel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.lampLabel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.charactersToSend, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MaxLengthParameters(value, elGetter);
}


/* eslint-enable */
