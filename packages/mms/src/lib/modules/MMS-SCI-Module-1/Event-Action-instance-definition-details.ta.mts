/* eslint-disable */
import {
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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
// export { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
import { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
// export { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
import { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
// export { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";


/**
 * @summary Event_Action_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Action-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     confirmedServiceRequest [4] ConfirmedServiceRequest,
 *     modifiers [5] IMPLICIT SEQUENCE OF Modifier,
 *     eventEnrollments [6] IMPLICIT SEQUENCE OF Event-Enrollment-instance
 * }
 * ```
 * 
 * @class
 */
export
class Event_Action_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `confirmedServiceRequest`.
         * @public
         * @readonly
         */
        readonly confirmedServiceRequest: ConfirmedServiceRequest,
        /**
         * @summary `modifiers`.
         * @public
         * @readonly
         */
        readonly modifiers: Modifier[],
        /**
         * @summary `eventEnrollments`.
         * @public
         * @readonly
         */
        readonly eventEnrollments: Event_Enrollment_instance[]
    ) {}

    /**
     * @summary Restructures an object into a Event_Action_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Action_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Action_instance_definition_details`.
     * @returns {Event_Action_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Event_Action_instance_definition_details)]: (Event_Action_instance_definition_details)[_K] }): Event_Action_instance_definition_details {
        return new Event_Action_instance_definition_details(_o.accessControl, _o.confirmedServiceRequest, _o.modifiers, _o.eventEnrollments);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Action_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Action_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("confirmedServiceRequest", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("modifiers", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eventEnrollments", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of Event_Action_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Action_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Action_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Action_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Event_Action_instance_definition_details: $.ASN1Decoder<Event_Action_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Action_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Action_instance_definition_details (el: _Element): Event_Action_instance_definition_details {
    if (!_cached_decoder_for_Event_Action_instance_definition_details) { _cached_decoder_for_Event_Action_instance_definition_details = function (el: _Element): Event_Action_instance_definition_details {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("Event-Action-instance-definition-details contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControl";
    sequence[1].name = "confirmedServiceRequest";
    sequence[2].name = "modifiers";
    sequence[3].name = "eventEnrollments";
    let accessControl!: Access_Control_List_instance;
    let confirmedServiceRequest!: ConfirmedServiceRequest;
    let modifiers!: Modifier[];
    let eventEnrollments!: Event_Enrollment_instance[];
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[0]);
    confirmedServiceRequest = $._decode_explicit<ConfirmedServiceRequest>(() => _decode_ConfirmedServiceRequest)(sequence[1]);
    modifiers = $._decode_implicit<Modifier[]>(() => $._decodeSequenceOf<Modifier>(() => _decode_Modifier))(sequence[2]);
    eventEnrollments = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(sequence[3]);
    return new Event_Action_instance_definition_details(
        accessControl,
        confirmedServiceRequest,
        modifiers,
        eventEnrollments,

    );
}; }
    return _cached_decoder_for_Event_Action_instance_definition_details(el);
}

let _cached_encoder_for_Event_Action_instance_definition_details: $.ASN1Encoder<Event_Action_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Event_Action_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Action_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Action_instance_definition_details (value: Event_Action_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Action_instance_definition_details) { _cached_encoder_for_Event_Action_instance_definition_details = function (value: Event_Action_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_ConfirmedServiceRequest, $.BER)(value.confirmedServiceRequest, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Modifier>(() => _encode_Modifier, $.BER), $.BER)(value.modifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollments, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Action_instance_definition_details(value, elGetter);
}


/* eslint-enable */
