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
import { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
// export { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary NotificationMetadata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationMetadata ::= [47] SEQUENCE { -- Tag 'BF2F'
 *     seqNumber [0] INTEGER,
 *     profileManagementOperation [1] NotificationEvent, / *Only one bit SHALL be set to 1* /
 *     notificationAddress UTF8String, -- FQDN to forward the notification
 *     iccid Iccid OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NotificationMetadata {
    constructor (
        /**
         * @summary `seqNumber`.
         * @public
         * @readonly
         */
        readonly seqNumber: INTEGER,
        /**
         * @summary `profileManagementOperation`.
         * @public
         * @readonly
         */
        readonly profileManagementOperation: NotificationEvent,
        /**
         * @summary `notificationAddress`.
         * @public
         * @readonly
         */
        readonly notificationAddress: UTF8String,
        /**
         * @summary `iccid`.
         * @public
         * @readonly
         */
        readonly iccid: OPTIONAL<Iccid>
    ) {}

    /**
     * @summary Restructures an object into a NotificationMetadata
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationMetadata`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationMetadata`.
     * @returns {NotificationMetadata}
     */
    public static _from_object (_o: { [_K in keyof (NotificationMetadata)]: (NotificationMetadata)[_K] }): NotificationMetadata {
        return new NotificationMetadata(_o.seqNumber, _o.profileManagementOperation, _o.notificationAddress, _o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    new $.ComponentSpec("seqNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileManagementOperation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notificationAddress", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("iccid", true, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationMetadata: $.ASN1Decoder<NotificationMetadata> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationMetadata
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationMetadata (el: _Element): NotificationMetadata {
    if (!_cached_decoder_for_NotificationMetadata) { _cached_decoder_for_NotificationMetadata = $._decode_implicit<NotificationMetadata>(() => function (el: _Element): NotificationMetadata {
    let seqNumber!: INTEGER;
    let profileManagementOperation!: NotificationEvent;
    let notificationAddress!: UTF8String;
    let iccid: OPTIONAL<Iccid>;
    const callbacks: $.DecodingMap = {
        "seqNumber": (_el: _Element): void => { seqNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "profileManagementOperation": (_el: _Element): void => { profileManagementOperation = $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent)(_el); },
        "notificationAddress": (_el: _Element): void => { notificationAddress = $._decodeUTF8String(_el); },
        "iccid": (_el: _Element): void => { iccid = _decode_Iccid(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationMetadata,
        _extension_additions_list_spec_for_NotificationMetadata,
        _root_component_type_list_2_spec_for_NotificationMetadata,
        undefined,
    );
    return new NotificationMetadata(
        seqNumber,
        profileManagementOperation,
        notificationAddress,
        iccid
    );
}); }
    return _cached_decoder_for_NotificationMetadata(el);
}

let _cached_encoder_for_NotificationMetadata: $.ASN1Encoder<NotificationMetadata> | null = null;

/**
 * @summary Encodes a(n) NotificationMetadata into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationMetadata, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationMetadata (value: NotificationMetadata, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationMetadata) { _cached_encoder_for_NotificationMetadata = $._encode_implicit(_TagClass.context, 47, () => function (value: NotificationMetadata, elGetter: $.ASN1Encoder<NotificationMetadata>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.seqNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER)(value.profileManagementOperation, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.notificationAddress, $.BER),
            /* IF_ABSENT  */ ((value.iccid === undefined) ? undefined : _encode_Iccid(value.iccid, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NotificationMetadata(value, elGetter);
}


/* eslint-enable */
