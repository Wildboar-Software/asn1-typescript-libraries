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
 * @summary AccessPolicyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPolicyType ::= SEQUENCE
 * {
 *  userAccessPolicyAttempt [1] BOOLEAN,
 *  -- default False, true indicates Target has accessed.
 *  groupAuthorizationRulesAttempt [2] BOOLEAN,
 *  -- default False, true indicates Target has accessed.
 *  userAccessPolicyQuery [3] BOOLEAN,
 *  -- default False, true indicates Target has accessed.
 *  groupAuthorizationRulesQuery [4] BOOLEAN,
 *  -- default False, true indicates Target has accessed.
 *  userAccessPolicyResult [5] UTF8String,
 *  groupAuthorizationRulesResult [6] UTF8String,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class AccessPolicyType {
    constructor (
        /**
         * @summary `userAccessPolicyAttempt`.
         * @public
         * @readonly
         */
        readonly userAccessPolicyAttempt: BOOLEAN,
        /**
         * @summary `groupAuthorizationRulesAttempt`.
         * @public
         * @readonly
         */
        readonly groupAuthorizationRulesAttempt: BOOLEAN,
        /**
         * @summary `userAccessPolicyQuery`.
         * @public
         * @readonly
         */
        readonly userAccessPolicyQuery: BOOLEAN,
        /**
         * @summary `groupAuthorizationRulesQuery`.
         * @public
         * @readonly
         */
        readonly groupAuthorizationRulesQuery: BOOLEAN,
        /**
         * @summary `userAccessPolicyResult`.
         * @public
         * @readonly
         */
        readonly userAccessPolicyResult: UTF8String,
        /**
         * @summary `groupAuthorizationRulesResult`.
         * @public
         * @readonly
         */
        readonly groupAuthorizationRulesResult: UTF8String,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessPolicyType
     * @description
     * 
     * This takes an `object` and converts it to a `AccessPolicyType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPolicyType`.
     * @returns {AccessPolicyType}
     */
    public static _from_object (_o: { [_K in keyof (AccessPolicyType)]: (AccessPolicyType)[_K] }): AccessPolicyType {
        return new AccessPolicyType(_o.userAccessPolicyAttempt, _o.groupAuthorizationRulesAttempt, _o.userAccessPolicyQuery, _o.groupAuthorizationRulesQuery, _o.userAccessPolicyResult, _o.groupAuthorizationRulesResult, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    new $.ComponentSpec("userAccessPolicyAttempt", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("groupAuthorizationRulesAttempt", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userAccessPolicyQuery", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("groupAuthorizationRulesQuery", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("userAccessPolicyResult", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("groupAuthorizationRulesResult", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessPolicyType: $.ASN1Decoder<AccessPolicyType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessPolicyType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessPolicyType (el: _Element): AccessPolicyType {
    if (!_cached_decoder_for_AccessPolicyType) { _cached_decoder_for_AccessPolicyType = function (el: _Element): AccessPolicyType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("AccessPolicyType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "userAccessPolicyAttempt";
    sequence[1].name = "groupAuthorizationRulesAttempt";
    sequence[2].name = "userAccessPolicyQuery";
    sequence[3].name = "groupAuthorizationRulesQuery";
    sequence[4].name = "userAccessPolicyResult";
    sequence[5].name = "groupAuthorizationRulesResult";
    let userAccessPolicyAttempt!: BOOLEAN;
    let groupAuthorizationRulesAttempt!: BOOLEAN;
    let userAccessPolicyQuery!: BOOLEAN;
    let groupAuthorizationRulesQuery!: BOOLEAN;
    let userAccessPolicyResult!: UTF8String;
    let groupAuthorizationRulesResult!: UTF8String;
    userAccessPolicyAttempt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    groupAuthorizationRulesAttempt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    userAccessPolicyQuery = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    groupAuthorizationRulesQuery = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[3]);
    userAccessPolicyResult = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[4]);
    groupAuthorizationRulesResult = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[5]);
    return new AccessPolicyType(
        userAccessPolicyAttempt,
        groupAuthorizationRulesAttempt,
        userAccessPolicyQuery,
        groupAuthorizationRulesQuery,
        userAccessPolicyResult,
        groupAuthorizationRulesResult,
        sequence.slice(6),
    );
}; }
    return _cached_decoder_for_AccessPolicyType(el);
}

let _cached_encoder_for_AccessPolicyType: $.ASN1Encoder<AccessPolicyType> | null = null;

/**
 * @summary Encodes a(n) AccessPolicyType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPolicyType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessPolicyType (value: AccessPolicyType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessPolicyType) { _cached_encoder_for_AccessPolicyType = function (value: AccessPolicyType, elGetter: $.ASN1Encoder<AccessPolicyType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.userAccessPolicyAttempt, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.groupAuthorizationRulesAttempt, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.userAccessPolicyQuery, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.groupAuthorizationRulesQuery, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.userAccessPolicyResult, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.groupAuthorizationRulesResult, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessPolicyType(value, elGetter);
}


/* eslint-enable */
