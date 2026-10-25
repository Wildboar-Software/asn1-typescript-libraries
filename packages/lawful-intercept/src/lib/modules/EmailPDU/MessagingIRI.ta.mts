/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type RELATIVE_OID,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Messaging_System_Type, _decode_Messaging_System_Type, _encode_Messaging_System_Type, _enum_for_Messaging_System_Type } from "../EmailPDU/Messaging-System-Type.ta.mjs";
// export { Messaging_System_Type, _enum_for_Messaging_System_Type, Messaging_System_Type_unified_messaging /* IMPORTED_LONG_ENUMERATION_ITEM */, unified_messaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_System_Type, _encode_Messaging_System_Type } from "../EmailPDU/Messaging-System-Type.ta.mjs";
import { type Messaging_Event_Category, _decode_Messaging_Event_Category, _encode_Messaging_Event_Category } from "../EmailPDU/Messaging-Event-Category.ta.mjs";
// export { Messaging_Event_Category, _decode_Messaging_Event_Category, _encode_Messaging_Event_Category } from "../EmailPDU/Messaging-Event-Category.ta.mjs";
import { type Messaging_Status, _decode_Messaging_Status, _encode_Messaging_Status, _enum_for_Messaging_Status } from "../EmailPDU/Messaging-Status.ta.mjs";
// export { Messaging_Status, _enum_for_Messaging_Status, Messaging_Status_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Status_not_applicable /* IMPORTED_LONG_ENUMERATION_ITEM */, not_applicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Status_operation_failed /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_failed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Status_operation_succeeded /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_succeeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Status_operation_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Status_operation_started /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_started /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Status_operation_lost /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_lost /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Status, _encode_Messaging_Status } from "../EmailPDU/Messaging-Status.ta.mjs";
import { Messaging_Party_Information, _decode_Messaging_Party_Information, _encode_Messaging_Party_Information } from "../EmailPDU/Messaging-Party-Information.ta.mjs";
// export { Messaging_Party_Information, _decode_Messaging_Party_Information, _encode_Messaging_Party_Information } from "../EmailPDU/Messaging-Party-Information.ta.mjs";
import { type Messaging_Trigger, _decode_Messaging_Trigger, _encode_Messaging_Trigger, _enum_for_Messaging_Trigger } from "../EmailPDU/Messaging-Trigger.ta.mjs";
// export { Messaging_Trigger, _enum_for_Messaging_Trigger, Messaging_Trigger_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Trigger_user /* IMPORTED_LONG_ENUMERATION_ITEM */, user /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Trigger_user_agent /* IMPORTED_LONG_ENUMERATION_ITEM */, user_agent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Trigger_system /* IMPORTED_LONG_ENUMERATION_ITEM */, system /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Trigger_system_operator /* IMPORTED_LONG_ENUMERATION_ITEM */, system_operator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Trigger, _encode_Messaging_Trigger } from "../EmailPDU/Messaging-Trigger.ta.mjs";
import { type Messaging_Property, _decode_Messaging_Property, _encode_Messaging_Property } from "../EmailPDU/Messaging-Property.ta.mjs";
// export { Messaging_Property, _decode_Messaging_Property, _encode_Messaging_Property } from "../EmailPDU/Messaging-Property.ta.mjs";


/**
 * @summary MessagingIRI
 * @description
 *
 * HI2 intercept-related information for a unified-messaging event that occurs
 * after the intercept is invoked.
 *
 * The event produced by the UM system is translated into `category`. If a
 * mediation system builds the record, `original_message` may, by CSP and LEA
 * agreement, carry the raw UM event. If no translation exists, the LEA uses
 * that raw event. What the system identifiers and the raw events mean is a
 * bilateral agreement and is out of scope.
 *
 * A CIN is allocated for each logical sequence (login through logout is the
 * example). Events in between, such as retrieve, delete, and greeting change,
 * share that CIN. When content is sent as well, `event_identifier` is mandatory
 * and ties this IRI to `MessagingCC` or `MessagingMMCC`.
 *
 * Intercepted email uses `EmailIRI` and `EmailCC`, unless a national agreement
 * overrides that. A voicemail-only system is still unified messaging for this
 * specification. Access to the box from the target's own mobile is handed over
 * under 3GPP TS 33.108; access from a public terminal with a PIN, and CSP
 * services such as email or SMS notification and web changes to a greeting or
 * PIN, are in scope here.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2 and 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessagingIRI ::= SEQUENCE
 * {
 *     messaging-iri-obj-id        [0] RELATIVE-OID,
 *     system-type                 [1] Messaging-System-Type,
 *     system-identifier           [2] OCTET STRING OPTIONAL,
 *         -- Identifier up to national agreement, uniquely identifies a certain messaging system
 *     category                    [3] Messaging-Event-Category OPTIONAL,
 *     status                      [4] Messaging-Status,
 *     party-information           [5] SET OF Messaging-Party-Information OPTIONAL,
 *     trigger                     [6] Messaging-Trigger,
 *     properties                  [7] SEQUENCE OF Messaging-Property OPTIONAL,
 *     event-identifier            [8] INTEGER (0..4294967295) OPTIONAL,
 *         -- Used to correlate to MessagingCC or MessagingMMCC within the same CIN. Mandatory when CC is also sent
 *     original-message            [9] OCTET STRING OPTIONAL,
 *     ...,
 *     box-identifier              [10] OCTET STRING OPTIONAL,
 *     total-recipient-count       [11] INTEGER (0..4294967295) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MessagingIRI {
    /**
     * @summary `messaging_iri_obj_id`.
     * @description
     *
     * Set to `messagingIRIObjId`, `{emailPDUObjId messagingIRI(3)}`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0 and annex D.
     *
     * @public
     * @readonly
     */
    readonly messaging_iri_obj_id: RELATIVE_OID;
    /**
     * @summary `system_type`.
     * @description
     *
     * Kind of messaging system. The only named value is unified messaging,
     * which includes a voicemail-only system (clause 4.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2 and 8.0.
     *
     * @public
     * @readonly
     */
    readonly system_type: Messaging_System_Type;
    /**
     * @summary `system_identifier`.
     * @description
     *
     * Identifies the system that generated the event. The identifier is agreed
     * nationally and is unique for that system. Documentation of systems is
     * bilateral and out of scope.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     *
     * @public
     * @readonly
     */
    readonly system_identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `category`.
     * @description
     *
     * The operation, once translated from the UM system's own event: a message
     * operation, a box operation, a notification, or a call. See clauses 8.2 to
     * 8.5. Omitted when no translation is possible; the LEA then uses
     * `original_message`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.0 to 8.5.
     *
     * @public
     * @readonly
     */
    readonly category: OPTIONAL<Messaging_Event_Category>;
    /**
     * @summary `status`.
     * @description
     *
     * Status of the current operation. See `Messaging_Status`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     *
     * @public
     * @readonly
     */
    readonly status: Messaging_Status;
    /**
     * @summary `party_information`.
     * @description
     *
     * Parties related to the event. See `Messaging_Party_Information`. Not
     * every noticed recipient has to appear here; `total_recipient_count`
     * covers that gap.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.0 and 8.6.
     *
     * @public
     * @readonly
     */
    readonly party_information: OPTIONAL<Messaging_Party_Information[]>;
    /**
     * @summary `trigger`.
     * @description
     *
     * Where the event came from: user, user agent, system, system operator, or
     * unknown. See `Messaging_Trigger`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     *
     * @public
     * @readonly
     */
    readonly trigger: Messaging_Trigger;
    /**
     * @summary `properties`.
     * @description
     *
     * Extra attributes of this event, such as PIN, priority, greeting type, or
     * message date. See `Messaging_Property`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     *
     * @public
     * @readonly
     */
    readonly properties: OPTIONAL<Messaging_Property[]>;
    /**
     * @summary `event_identifier`.
     * @description
     *
     * Correlates this IRI with `MessagingCC` or `MessagingMMCC` inside the same
     * CIN. Mandatory when content is also sent. Range 0 to 4294967295.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.0 and 8.1.
     *
     * @public
     * @readonly
     */
    readonly event_identifier: OPTIONAL<INTEGER>;
    /**
     * @summary `original_message`.
     * @description
     *
     * Raw IRI event from the UM system, when a mediation system formatted this
     * record and the CSP and LEA have agreed to include it. The translated
     * event is still carried in `category` when a translation exists.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     *
     * @public
     * @readonly
     */
    readonly original_message: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `box_identifier`.
     * @description
     *
     * Identifies one message box when several boxes are under intercept for the
     * same LIID.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     *
     * @public
     * @readonly
     */
    readonly box_identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `total_recipient_count`.
     * @description
     *
     * How many recipients the intercept equipment noticed, including any that
     * are not listed in `party_information`. Range 0 to 4294967295.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     *
     * @public
     * @readonly
     */
    readonly total_recipient_count: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messaging_iri_obj_id: RELATIVE_OID,
        system_type: Messaging_System_Type,
        system_identifier: OPTIONAL<OCTET_STRING>,
        category: OPTIONAL<Messaging_Event_Category>,
        status: Messaging_Status,
        party_information: OPTIONAL<Messaging_Party_Information[]>,
        trigger: Messaging_Trigger,
        properties?: OPTIONAL<Messaging_Property[]>,
        event_identifier?: OPTIONAL<INTEGER>,
        original_message?: OPTIONAL<OCTET_STRING>,
        box_identifier?: OPTIONAL<OCTET_STRING>,
        total_recipient_count?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messaging_iri_obj_id = messaging_iri_obj_id;
        this.system_type = system_type;
        this.system_identifier = system_identifier;
        this.category = category;
        this.status = status;
        this.party_information = party_information;
        this.trigger = trigger;
        this.properties = properties;
        this.event_identifier = event_identifier;
        this.original_message = original_message;
        this.box_identifier = box_identifier;
        this.total_recipient_count = total_recipient_count;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MessagingIRI
     * @description
     * 
     * This takes an `object` and converts it to a `MessagingIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessagingIRI`.
     * @returns {MessagingIRI}
     */
    public static _from_object (_o: { [_K in keyof (MessagingIRI)]: (MessagingIRI)[_K] }): MessagingIRI {
        return new MessagingIRI(_o.messaging_iri_obj_id, _o.system_type, _o.system_identifier, _o.category, _o.status, _o.party_information, _o.trigger, _o.properties, _o.event_identifier, _o.original_message, _o.box_identifier, _o.total_recipient_count, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `system_type`
         * @public
         * @static
         */

    public static _enum_for_system_type: typeof _enum_for_Messaging_System_Type = _enum_for_Messaging_System_Type;        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status: typeof _enum_for_Messaging_Status = _enum_for_Messaging_Status;        /**
         * @summary The enum used as the type of the component `trigger`
         * @public
         * @static
         */

    public static _enum_for_trigger: typeof _enum_for_Messaging_Trigger = _enum_for_Messaging_Trigger;
}

/**
 * @summary The Leading Root Component Types of MessagingIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessagingIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("messaging-iri-obj-id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("system-type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("system-identifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("party-information", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("trigger", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("properties", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("event-identifier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("original-message", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MessagingIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessagingIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessagingIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessagingIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("box-identifier", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("total-recipient-count", true, $.hasTag(_TagClass.context, 11))
];

let _cached_decoder_for_MessagingIRI: $.ASN1Decoder<MessagingIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessagingIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessagingIRI (el: _Element): MessagingIRI {
    if (!_cached_decoder_for_MessagingIRI) { _cached_decoder_for_MessagingIRI = function (el: _Element): MessagingIRI {
    let messaging_iri_obj_id!: RELATIVE_OID;
    let system_type!: Messaging_System_Type;
    let system_identifier: OPTIONAL<OCTET_STRING>;
    let category: OPTIONAL<Messaging_Event_Category>;
    let status!: Messaging_Status;
    let party_information: OPTIONAL<Messaging_Party_Information[]>;
    let trigger!: Messaging_Trigger;
    let properties: OPTIONAL<Messaging_Property[]>;
    let event_identifier: OPTIONAL<INTEGER>;
    let original_message: OPTIONAL<OCTET_STRING>;
    let box_identifier: OPTIONAL<OCTET_STRING>;
    let total_recipient_count: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "messaging-iri-obj-id": (_el: _Element): void => { messaging_iri_obj_id = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "system-type": (_el: _Element): void => { system_type = $._decode_implicit<Messaging_System_Type>(() => _decode_Messaging_System_Type)(_el); },
        "system-identifier": (_el: _Element): void => { system_identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "category": (_el: _Element): void => { category = $._decode_explicit<Messaging_Event_Category>(() => _decode_Messaging_Event_Category)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<Messaging_Status>(() => _decode_Messaging_Status)(_el); },
        "party-information": (_el: _Element): void => { party_information = $._decode_implicit<Messaging_Party_Information[]>(() => $._decodeSetOf<Messaging_Party_Information>(() => _decode_Messaging_Party_Information))(_el); },
        "trigger": (_el: _Element): void => { trigger = $._decode_implicit<Messaging_Trigger>(() => _decode_Messaging_Trigger)(_el); },
        "properties": (_el: _Element): void => { properties = $._decode_implicit<Messaging_Property[]>(() => $._decodeSequenceOf<Messaging_Property>(() => _decode_Messaging_Property))(_el); },
        "event-identifier": (_el: _Element): void => {
            event_identifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof event_identifier === "bigint" ? event_identifier : BigInt(event_identifier);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingIRI.event_identifier violates INTEGER range");
            }
        },
        "original-message": (_el: _Element): void => { original_message = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "box-identifier": (_el: _Element): void => { box_identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "total-recipient-count": (_el: _Element): void => {
            total_recipient_count = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof total_recipient_count === "bigint" ? total_recipient_count : BigInt(total_recipient_count);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingIRI.total_recipient_count violates INTEGER range");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessagingIRI,
        _extension_additions_list_spec_for_MessagingIRI,
        _root_component_type_list_2_spec_for_MessagingIRI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MessagingIRI(
        messaging_iri_obj_id,
        system_type,
        system_identifier,
        category,
        status,
        party_information,
        trigger,
        properties,
        event_identifier,
        original_message,
        box_identifier,
        total_recipient_count,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MessagingIRI(el);
}

let _cached_encoder_for_MessagingIRI: $.ASN1Encoder<MessagingIRI> | null = null;

/**
 * @summary Encodes a(n) MessagingIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessagingIRI, encoded as an ASN.1 Element.
 */
export
function _encode_MessagingIRI (value: MessagingIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessagingIRI) { _cached_encoder_for_MessagingIRI = function (value: MessagingIRI, elGetter: $.ASN1Encoder<MessagingIRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.messaging_iri_obj_id, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Messaging_System_Type, $.BER)(value.system_type, $.BER);
    if (value.system_identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.system_identifier, $.BER);
    }
    if (value.category !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Messaging_Event_Category, $.BER)(value.category, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Messaging_Status, $.BER)(value.status, $.BER);
    if (value.party_information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<Messaging_Party_Information>(() => _encode_Messaging_Party_Information, $.BER), $.BER)(value.party_information, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Messaging_Trigger, $.BER)(value.trigger, $.BER);
    if (value.properties !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Messaging_Property>(() => _encode_Messaging_Property, $.BER), $.BER)(value.properties, $.BER);
    }
    if (value.event_identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.event_identifier, $.BER);
    }
    if (value.original_message !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.original_message, $.BER);
    }
    if (value.box_identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.box_identifier, $.BER);
    }
    if (value.total_recipient_count !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.total_recipient_count, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessagingIRI(value, elGetter);
}


/* eslint-enable */
