/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { PrimaryOrSecondaryCall, _decode_PrimaryOrSecondaryCall, _encode_PrimaryOrSecondaryCall } from "../CSTA-service-completion-failure-event/PrimaryOrSecondaryCall.ta.mjs";

import { OtherCall, _decode_OtherCall, _encode_OtherCall } from "../CSTA-service-completion-failure-event/OtherCall.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ServiceCompletionFailureEvent
 * @description
 *
 * Service Completion Failure event (ECMA-269 §18.2.5 / ECMA-285 §16.2.5).
 * Direction: SF→CF via Event Report. If events already showed a state change,
 * CF must apply services
 * to restore original conditions if needed and possible.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceCompletionFailureEvent ::= SEQUENCE
 * {    primaryCall            PrimaryOrSecondaryCall,
 *     secondaryCall            [0] IMPLICIT PrimaryOrSecondaryCall    OPTIONAL,
 *     otherDevsPrimaryCallList    [1] IMPLICIT SEQUENCE OF OtherCall    OPTIONAL,
 *     otherDevsSecondaryCallList    [2] IMPLICIT SEQUENCE OF OtherCall    OPTIONAL,
 *     mediaCallCharacteristics    [3] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     cause                EventCause,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ServiceCompletionFailureEvent {
    constructor (
        /**
         * @summary `primaryCall`.
         * @description
         *
         * Connection in the primary call of the failed service.
         * @public
         * @readonly
         */
        readonly primaryCall: PrimaryOrSecondaryCall,
        /**
         * @summary `secondaryCall`.
         * @description
         *
         * Connection in the secondary call, if the service had one.
         * @public
         * @readonly
         */
        readonly secondaryCall: OPTIONAL<PrimaryOrSecondaryCall>,
        /**
         * @summary `otherDevsPrimaryCallList`.
         * @description
         *
         * Other devices/connections on the primary call.
         * @public
         * @readonly
         */
        readonly otherDevsPrimaryCallList: OPTIONAL<OtherCall[]>,
        /**
         * @summary `otherDevsSecondaryCallList`.
         * @description
         *
         * Other devices/connections on the secondary call.
         * @public
         * @readonly
         */
        readonly otherDevsSecondaryCallList: OPTIONAL<OtherCall[]>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Media characteristics of the affected call(s).
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `cause`.
         * @description
         *
         * Why completion failed.
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ServiceCompletionFailureEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceCompletionFailureEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceCompletionFailureEvent`.
     * @returns {ServiceCompletionFailureEvent}
     */
    public static _from_object (_o: { [_K in keyof (ServiceCompletionFailureEvent)]: (ServiceCompletionFailureEvent)[_K] }): ServiceCompletionFailureEvent {
        return new ServiceCompletionFailureEvent(_o.primaryCall, _o.secondaryCall, _o.otherDevsPrimaryCallList, _o.otherDevsSecondaryCallList, _o.mediaCallCharacteristics, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("primaryCall", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("secondaryCall", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("otherDevsPrimaryCallList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("otherDevsSecondaryCallList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceCompletionFailureEvent: $.ASN1Decoder<ServiceCompletionFailureEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceCompletionFailureEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceCompletionFailureEvent (el: _Element): ServiceCompletionFailureEvent {
    if (!_cached_decoder_for_ServiceCompletionFailureEvent) { _cached_decoder_for_ServiceCompletionFailureEvent = function (el: _Element): ServiceCompletionFailureEvent {
    let primaryCall!: PrimaryOrSecondaryCall;
    let secondaryCall: OPTIONAL<PrimaryOrSecondaryCall>;
    let otherDevsPrimaryCallList: OPTIONAL<OtherCall[]>;
    let otherDevsSecondaryCallList: OPTIONAL<OtherCall[]>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let cause!: EventCause;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "primaryCall": (_el: _Element): void => { primaryCall = _decode_PrimaryOrSecondaryCall(_el); },
        "secondaryCall": (_el: _Element): void => { secondaryCall = $._decode_implicit<PrimaryOrSecondaryCall>(() => _decode_PrimaryOrSecondaryCall)(_el); },
        "otherDevsPrimaryCallList": (_el: _Element): void => { otherDevsPrimaryCallList = $._decode_implicit<OtherCall[]>(() => $._decodeSequenceOf<OtherCall>(() => _decode_OtherCall))(_el); },
        "otherDevsSecondaryCallList": (_el: _Element): void => { otherDevsSecondaryCallList = $._decode_implicit<OtherCall[]>(() => $._decodeSequenceOf<OtherCall>(() => _decode_OtherCall))(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceCompletionFailureEvent,
        _extension_additions_list_spec_for_ServiceCompletionFailureEvent,
        _root_component_type_list_2_spec_for_ServiceCompletionFailureEvent,
        undefined,
    );
    return new ServiceCompletionFailureEvent(
        primaryCall,
        secondaryCall,
        otherDevsPrimaryCallList,
        otherDevsSecondaryCallList,
        mediaCallCharacteristics,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_ServiceCompletionFailureEvent(el);
}

let _cached_encoder_for_ServiceCompletionFailureEvent: $.ASN1Encoder<ServiceCompletionFailureEvent> | null = null;

/**
 * @summary Encodes a(n) ServiceCompletionFailureEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceCompletionFailureEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceCompletionFailureEvent (value: ServiceCompletionFailureEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceCompletionFailureEvent) { _cached_encoder_for_ServiceCompletionFailureEvent = function (value: ServiceCompletionFailureEvent, elGetter: $.ASN1Encoder<ServiceCompletionFailureEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PrimaryOrSecondaryCall(value.primaryCall, $.BER),
            /* IF_ABSENT  */ ((value.secondaryCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrimaryOrSecondaryCall, $.BER)(value.secondaryCall, $.BER)),
            /* IF_ABSENT  */ ((value.otherDevsPrimaryCallList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OtherCall>(() => _encode_OtherCall, $.BER), $.BER)(value.otherDevsPrimaryCallList, $.BER)),
            /* IF_ABSENT  */ ((value.otherDevsSecondaryCallList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OtherCall>(() => _encode_OtherCall, $.BER), $.BER)(value.otherDevsSecondaryCallList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceCompletionFailureEvent(value, elGetter);
}


/* eslint-enable */
