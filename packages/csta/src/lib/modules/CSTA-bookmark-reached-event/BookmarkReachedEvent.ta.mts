/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary BookmarkReachedEvent
 * @description
 *
 * Indicates a mark in the speech synthesis markup language has been reached.
 * Reported to a computing function that has a device-type or call-type monitor.
 * This module has no ROSE OPERATION; the payload is a voice-unit event
 * alternative (ECMA-285 §24.2). (ECMA-269 §26.2.1, ECMA-285 §24.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BookmarkReachedEvent ::= SEQUENCE
 * {    overConnection            ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     bookmark            IA5String,
 *     cause                EventCause                OPTIONAL,
 *     servicesPermitted        ServicesPermitted            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class BookmarkReachedEvent {
    constructor (
        /**
         * @summary `overConnection`.
         * @description
         *
         * Connection on which the bookmark occurred (ECMA-269 §26.2.1).
         *
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
        /**
         * @summary `resource`.
         * @description
         *
         * Interactive voice resource. Required when more than one interactive
         * voice resource exists on the connection.
         *
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `bookmark`.
         * @description
         *
         * SSML mark that was reached (ECMA-269 §26.2.1).
         *
         * @public
         * @readonly
         */
        readonly bookmark: IA5String,
        /**
         * @summary `cause`.
         * @description
         *
         * Event cause, when the switching function supplies one.
         *
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `servicesPermitted`.
         * @description
         *
         * Services permitted on the connection after this event.
         *
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a BookmarkReachedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `BookmarkReachedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BookmarkReachedEvent`.
     * @returns {BookmarkReachedEvent}
     */
    public static _from_object (_o: { [_K in keyof (BookmarkReachedEvent)]: (BookmarkReachedEvent)[_K] }): BookmarkReachedEvent {
        return new BookmarkReachedEvent(_o.overConnection, _o.resource, _o.bookmark, _o.cause, _o.servicesPermitted, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of BookmarkReachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BookmarkReachedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bookmark", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of BookmarkReachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BookmarkReachedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BookmarkReachedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BookmarkReachedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BookmarkReachedEvent: $.ASN1Decoder<BookmarkReachedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BookmarkReachedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BookmarkReachedEvent (el: _Element): BookmarkReachedEvent {
    if (!_cached_decoder_for_BookmarkReachedEvent) { _cached_decoder_for_BookmarkReachedEvent = function (el: _Element): BookmarkReachedEvent {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let bookmark!: IA5String;
    let cause: OPTIONAL<EventCause>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "bookmark": (_el: _Element): void => { bookmark = $._decodeIA5String(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = _decode_ServicesPermitted(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BookmarkReachedEvent,
        _extension_additions_list_spec_for_BookmarkReachedEvent,
        _root_component_type_list_2_spec_for_BookmarkReachedEvent,
        undefined,
    );
    return new BookmarkReachedEvent(
        overConnection,
        resource,
        bookmark,
        cause,
        servicesPermitted,
        extensions
    );
}; }
    return _cached_decoder_for_BookmarkReachedEvent(el);
}

let _cached_encoder_for_BookmarkReachedEvent: $.ASN1Encoder<BookmarkReachedEvent> | null = null;

/**
 * @summary Encodes a(n) BookmarkReachedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BookmarkReachedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_BookmarkReachedEvent (value: BookmarkReachedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BookmarkReachedEvent) { _cached_encoder_for_BookmarkReachedEvent = function (value: BookmarkReachedEvent, elGetter: $.ASN1Encoder<BookmarkReachedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.bookmark, $.BER),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : _encode_ServicesPermitted(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BookmarkReachedEvent(value, elGetter);
}


/* eslint-enable */
