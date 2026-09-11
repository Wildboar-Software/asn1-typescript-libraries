/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../CAP-datatypes/CollectedInfo.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../CAP-datatypes/InformationToSend.ta.mjs";



/**
 * @summary PromptAndCollectUserInformationArg
 * @description
 *
 * Argument of PromptAndCollectUserInformation: collection criteria
 * (`collectedInfo` / collectedDigits), optional prompt
 * (`informationToSend`), disconnect policy, and start notification.
 * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptAndCollectUserInformationArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     collectedInfo            [0] CollectedInfo,
 *     disconnectFromIPForbidden        [1] BOOLEAN    DEFAULT TRUE,
 *     informationToSend            [2] InformationToSend {bound}        OPTIONAL,
 *     extensions                [3] Extensions {bound}            OPTIONAL,
 *     callSegmentID            [4]    CallSegmentID {bound}            OPTIONAL,
 *     requestAnnouncementStartedNotification [51] BOOLEAN DEFAULT FALSE,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class PromptAndCollectUserInformationArg {
    constructor (
        /**
         * @summary `collectedInfo`.
         * @description
         *
         * Collection criteria (`collectedDigits`). Constraints:
         * `maximumNbOfDigits` ≥ `minimumNbOfDigits` (else operation
         * error). `endOfReplyDigit` / `cancelDigit` / `startDigit`
         * as specified in clause 11.25.1.1. `firstDigitTimeOut`:
         * first digit (or startDigit) must arrive before expiry;
         * absent → gsmSRF default. `interDigitTimeOut`: subsequent
         * digits; reset on each digit; expiry with fewer than min
         * digits is unsuccessful, with min..max is successful;
         * absent → gsmSRF default. `errorTreatment`:
         * reportErrorToSCF → ImproperCallerResponse; help → network
         * default announcement; repeatPrompt → repeat the prompt
         * (help/repeatPrompt once per invoke).
         * `interruptableAnnInd`: TRUE interrupts the announcement on
         * first digit. `voiceInformation`: TRUE → speech (gsmSRF
         * speech-to-digits); FALSE → DTMF. `voiceBack`: TRUE
         * announces valid digits back (not invalid, not endOfReply).
         * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
         *
         * @public
         * @readonly
         */
        readonly collectedInfo: CollectedInfo,
        /**
         * @summary `disconnectFromIPForbidden`.
         * @description
         *
         * TRUE (ASN.1 default): gsmSRF shall not initiate disconnect
         * after the interaction. FALSE: gsmSRF may disconnect.
         * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
         *
         * @public
         * @readonly
         */
        readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>,
        /**
         * @summary `informationToSend`.
         * @description
         *
         * Optional announcement or tone to play before/during
         * collection. Same `inbandInfo` / `tone` structure as
         * PlayAnnouncement: duration 0 = endless/infinite;
         * interval only if numberOfRepetitions > 1.
         * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
         *
         * @public
         * @readonly
         */
        readonly informationToSend: OPTIONAL<InformationToSend>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `callSegmentID`.
         * @description
         *
         * Call Segment to which the user interaction applies.
         * unknownCSID if the CSID is not known.
         * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
         *
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary `requestAnnouncementStartedNotification`.
         * @description
         *
         * TRUE: send SpecializedResourceReport with
         * `firstAnnouncementStarted` when the first announcement or
         * tone has started. ASN.1 default FALSE.
         * (3GPP TS 29.078 V19.0.0 clause 11.25.1.1).
         *
         * @public
         * @readonly
         */
        readonly requestAnnouncementStartedNotification: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PromptAndCollectUserInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `PromptAndCollectUserInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PromptAndCollectUserInformationArg`.
     * @returns {PromptAndCollectUserInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (PromptAndCollectUserInformationArg)]: (PromptAndCollectUserInformationArg)[_K] }): PromptAndCollectUserInformationArg {
        return new PromptAndCollectUserInformationArg(_o.collectedInfo, _o.disconnectFromIPForbidden, _o.informationToSend, _o.extensions, _o.callSegmentID, _o.requestAnnouncementStartedNotification, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
    /**
     * @summary Getter that returns the default value for `requestAnnouncementStartedNotification`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementStartedNotification () { return false; }
}

/**
 * @summary The Leading Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("collectedInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("informationToSend", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestAnnouncementStartedNotification", true, $.hasTag(_TagClass.context, 51))
];

/**
 * @summary The Trailing Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PromptAndCollectUserInformationArg: $.ASN1Decoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptAndCollectUserInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptAndCollectUserInformationArg (el: _Element): PromptAndCollectUserInformationArg {
    if (!_cached_decoder_for_PromptAndCollectUserInformationArg) { _cached_decoder_for_PromptAndCollectUserInformationArg = function (el: _Element): PromptAndCollectUserInformationArg {
    let collectedInfo!: CollectedInfo;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden;
    let informationToSend: OPTIONAL<InformationToSend>;
    let extensions: OPTIONAL<Extensions>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let requestAnnouncementStartedNotification: OPTIONAL<BOOLEAN> = PromptAndCollectUserInformationArg._default_value_for_requestAnnouncementStartedNotification;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "collectedInfo": (_el: _Element): void => { collectedInfo = $._decode_implicit<CollectedInfo>(() => _decode_CollectedInfo)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_implicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "requestAnnouncementStartedNotification": (_el: _Element): void => { requestAnnouncementStartedNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg,
        _extension_additions_list_spec_for_PromptAndCollectUserInformationArg,
        _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PromptAndCollectUserInformationArg(
        collectedInfo,
        disconnectFromIPForbidden,
        informationToSend,
        extensions,
        callSegmentID,
        requestAnnouncementStartedNotification,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PromptAndCollectUserInformationArg(el);
}

let _cached_encoder_for_PromptAndCollectUserInformationArg: $.ASN1Encoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Encodes a(n) PromptAndCollectUserInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptAndCollectUserInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_PromptAndCollectUserInformationArg (value: PromptAndCollectUserInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptAndCollectUserInformationArg) { _cached_encoder_for_PromptAndCollectUserInformationArg = function (value: PromptAndCollectUserInformationArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CollectedInfo, $.BER)(value.collectedInfo, $.BER),
            /* IF_DEFAULT */ (value.disconnectFromIPForbidden === undefined || $.deepEq(value.disconnectFromIPForbidden, PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER)),
            /* IF_ABSENT  */ ((value.informationToSend === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_DEFAULT */ (value.requestAnnouncementStartedNotification === undefined || $.deepEq(value.requestAnnouncementStartedNotification, PromptAndCollectUserInformationArg._default_value_for_requestAnnouncementStartedNotification) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeBoolean, $.BER)(value.requestAnnouncementStartedNotification, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PromptAndCollectUserInformationArg(value, elGetter);
}


/* eslint-enable */
