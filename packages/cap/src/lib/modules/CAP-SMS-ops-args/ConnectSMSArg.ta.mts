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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary ConnectSMSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectSMSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     callingPartysNumber            [0] SMS-AddressString            OPTIONAL,
 *     destinationSubscriberNumber        [1] CalledPartyBCDNumber {bound}        OPTIONAL,
 *     sMSCAddress                [2] ISDN-AddressString            OPTIONAL,
 *     extensions                [10] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ConnectSMSArg {
    constructor (
        /**
         * @summary `callingPartysNumber`.
         * @public
         * @readonly
         */
        readonly callingPartysNumber: OPTIONAL<SMS_AddressString>,
        /**
         * @summary `destinationSubscriberNumber`.
         * @public
         * @readonly
         */
        readonly destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>,
        /**
         * @summary `sMSCAddress`.
         * @public
         * @readonly
         */
        readonly sMSCAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ConnectSMSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectSMSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectSMSArg`.
     * @returns {ConnectSMSArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectSMSArg)]: (ConnectSMSArg)[_K] }): ConnectSMSArg {
        return new ConnectSMSArg(_o.callingPartysNumber, _o.destinationSubscriberNumber, _o.sMSCAddress, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    /* FIXME: callingPartysNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: destinationSubscriberNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("sMSCAddress", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectSMSArg: $.ASN1Decoder<ConnectSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectSMSArg (el: _Element): ConnectSMSArg {
    if (!_cached_decoder_for_ConnectSMSArg) { _cached_decoder_for_ConnectSMSArg = function (el: _Element): ConnectSMSArg {
    let callingPartysNumber: OPTIONAL<SMS_AddressString>;
    let destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>;
    let sMSCAddress: OPTIONAL<ISDN_AddressString>;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callingPartysNumber": (_el: _Element): void => { callingPartysNumber = $._decode_implicit<SMS_AddressString>(() => _decode_SMS_AddressString)(_el); },
        "destinationSubscriberNumber": (_el: _Element): void => { destinationSubscriberNumber = $._decode_implicit<CalledPartyBCDNumber>(() => _decode_CalledPartyBCDNumber)(_el); },
        "sMSCAddress": (_el: _Element): void => { sMSCAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectSMSArg,
        _extension_additions_list_spec_for_ConnectSMSArg,
        _root_component_type_list_2_spec_for_ConnectSMSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectSMSArg(
        callingPartysNumber,
        destinationSubscriberNumber,
        sMSCAddress,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectSMSArg(el);
}

let _cached_encoder_for_ConnectSMSArg: $.ASN1Encoder<ConnectSMSArg> | null = null;

/**
 * @summary Encodes a(n) ConnectSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectSMSArg (value: ConnectSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectSMSArg) { _cached_encoder_for_ConnectSMSArg = function (value: ConnectSMSArg, elGetter: $.ASN1Encoder<ConnectSMSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callingPartysNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SMS_AddressString, $.BER)(value.callingPartysNumber, $.BER)),
            /* IF_ABSENT  */ ((value.destinationSubscriberNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBCDNumber, $.BER)(value.destinationSubscriberNumber, $.BER)),
            /* IF_ABSENT  */ ((value.sMSCAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.sMSCAddress, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectSMSArg(value, elGetter);
}


/* eslint-enable */
