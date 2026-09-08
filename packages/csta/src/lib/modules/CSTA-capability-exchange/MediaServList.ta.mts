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
import { AttachMediaService, AttachMediaService_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, mediaServiceVersion /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_mediaServiceInstanceID /* IMPORTED_LONG_NAMED_BIT */, mediaServiceInstanceID /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeConsultConference /* IMPORTED_LONG_NAMED_BIT */, connectionModeConsultConference /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeConsultConferenceHold /* IMPORTED_LONG_NAMED_BIT */, connectionModeConsultConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDeflect /* IMPORTED_LONG_NAMED_BIT */, connectionModeDeflect /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDirectedPickup /* IMPORTED_LONG_NAMED_BIT */, connectionModeDirectedPickup /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeJoin /* IMPORTED_LONG_NAMED_BIT */, connectionModeJoin /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepConference /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepConference /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepConferenceHold /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeTransfer /* IMPORTED_LONG_NAMED_BIT */, connectionModeTransfer /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDirect /* IMPORTED_LONG_NAMED_BIT */, connectionModeDirect /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_requestedConnectionState /* IMPORTED_LONG_NAMED_BIT */, requestedConnectionState /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_privateData /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_mediaServiceInstanceIDInAck /* IMPORTED_LONG_NAMED_BIT */, mediaServiceInstanceIDInAck /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_mediaConnectionInfoInAck /* IMPORTED_LONG_NAMED_BIT */, mediaConnectionInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AttachMediaService, _encode_AttachMediaService } from "../CSTA-capability-exchange/AttachMediaService.ta.mjs";
// export { AttachMediaService, AttachMediaService_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, mediaServiceVersion /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_mediaServiceInstanceID /* IMPORTED_LONG_NAMED_BIT */, mediaServiceInstanceID /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeConsultConference /* IMPORTED_LONG_NAMED_BIT */, connectionModeConsultConference /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeConsultConferenceHold /* IMPORTED_LONG_NAMED_BIT */, connectionModeConsultConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDeflect /* IMPORTED_LONG_NAMED_BIT */, connectionModeDeflect /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDirectedPickup /* IMPORTED_LONG_NAMED_BIT */, connectionModeDirectedPickup /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeJoin /* IMPORTED_LONG_NAMED_BIT */, connectionModeJoin /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepConference /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepConference /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepConferenceHold /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepConferenceHold /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeSingleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, connectionModeSingleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeTransfer /* IMPORTED_LONG_NAMED_BIT */, connectionModeTransfer /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_connectionModeDirect /* IMPORTED_LONG_NAMED_BIT */, connectionModeDirect /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_requestedConnectionState /* IMPORTED_LONG_NAMED_BIT */, requestedConnectionState /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_privateData /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_mediaServiceInstanceIDInAck /* IMPORTED_LONG_NAMED_BIT */, mediaServiceInstanceIDInAck /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_mediaConnectionInfoInAck /* IMPORTED_LONG_NAMED_BIT */, mediaConnectionInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, AttachMediaService_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AttachMediaService_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AttachMediaService, _encode_AttachMediaService } from "../CSTA-capability-exchange/AttachMediaService.ta.mjs";
import { DetachMediaService, DetachMediaService_alerting /* IMPORTED_LONG_NAMED_BIT */, alerting /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_connected /* IMPORTED_LONG_NAMED_BIT */, connected /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_fail /* IMPORTED_LONG_NAMED_BIT */, fail /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_hold /* IMPORTED_LONG_NAMED_BIT */, hold /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_privateData /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DetachMediaService, _encode_DetachMediaService } from "../CSTA-capability-exchange/DetachMediaService.ta.mjs";
// export { DetachMediaService, DetachMediaService_alerting /* IMPORTED_LONG_NAMED_BIT */, alerting /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_connected /* IMPORTED_LONG_NAMED_BIT */, connected /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_fail /* IMPORTED_LONG_NAMED_BIT */, fail /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_hold /* IMPORTED_LONG_NAMED_BIT */, hold /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, DetachMediaService_privateData /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DetachMediaService_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DetachMediaService, _encode_DetachMediaService } from "../CSTA-capability-exchange/DetachMediaService.ta.mjs";


/**
 * @summary MediaServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServList ::= SEQUENCE
 * {     attachMediaService         [0] IMPLICIT     AttachMediaService     OPTIONAL,
 *     detachMediaService         [1] IMPLICIT     DetachMediaService     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaServList {
    constructor (
        /**
         * @summary `attachMediaService`.
         * @public
         * @readonly
         */
        readonly attachMediaService: OPTIONAL<AttachMediaService>,
        /**
         * @summary `detachMediaService`.
         * @public
         * @readonly
         */
        readonly detachMediaService: OPTIONAL<DetachMediaService>
    ) {}

    /**
     * @summary Restructures an object into a MediaServList
     * @description
     * 
     * This takes an `object` and converts it to a `MediaServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaServList`.
     * @returns {MediaServList}
     */
    public static _from_object (_o: { [_K in keyof (MediaServList)]: (MediaServList)[_K] }): MediaServList {
        return new MediaServList(_o.attachMediaService, _o.detachMediaService);
    }


}

/**
 * @summary The Leading Root Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaServList: $.ComponentSpec[] = [
    new $.ComponentSpec("attachMediaService", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("detachMediaService", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaServList: $.ASN1Decoder<MediaServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServList (el: _Element): MediaServList {
    if (!_cached_decoder_for_MediaServList) { _cached_decoder_for_MediaServList = function (el: _Element): MediaServList {
    let attachMediaService: OPTIONAL<AttachMediaService>;
    let detachMediaService: OPTIONAL<DetachMediaService>;
    const callbacks: $.DecodingMap = {
        "attachMediaService": (_el: _Element): void => { attachMediaService = $._decode_implicit<AttachMediaService>(() => _decode_AttachMediaService)(_el); },
        "detachMediaService": (_el: _Element): void => { detachMediaService = $._decode_implicit<DetachMediaService>(() => _decode_DetachMediaService)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaServList,
        _extension_additions_list_spec_for_MediaServList,
        _root_component_type_list_2_spec_for_MediaServList,
        undefined,
    );
    return new MediaServList(
        attachMediaService,
        detachMediaService
    );
}; }
    return _cached_decoder_for_MediaServList(el);
}

let _cached_encoder_for_MediaServList: $.ASN1Encoder<MediaServList> | null = null;

/**
 * @summary Encodes a(n) MediaServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServList, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServList (value: MediaServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServList) { _cached_encoder_for_MediaServList = function (value: MediaServList, elGetter: $.ASN1Encoder<MediaServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.attachMediaService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AttachMediaService, $.BER)(value.attachMediaService, $.BER)),
            /* IF_ABSENT  */ ((value.detachMediaService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DetachMediaService, $.BER)(value.detachMediaService, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaServList(value, elGetter);
}


/* eslint-enable */
