/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    VisibleString,
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
import { Semaphore_instance_definition_details_class, _enum_for_Semaphore_instance_definition_details_class, _decode_Semaphore_instance_definition_details_class, _encode_Semaphore_instance_definition_details_class } from "../MMS-SCI-Module-1/Semaphore-instance-definition-details-class.ta.mjs";
// export { Semaphore_instance_definition_details_class, _enum_for_Semaphore_instance_definition_details_class, Semaphore_instance_definition_details_class_token /* IMPORTED_LONG_ENUMERATION_ITEM */, token /* IMPORTED_SHORT_ENUMERATION_ITEM */, Semaphore_instance_definition_details_class_pool /* IMPORTED_LONG_ENUMERATION_ITEM */, pool /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Semaphore_instance_definition_details_class, _encode_Semaphore_instance_definition_details_class } from "../MMS-SCI-Module-1/Semaphore-instance-definition-details-class.ta.mjs";
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";


/**
 * @summary Semaphore_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Semaphore-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     class [4] IMPLICIT ENUMERATED {
 *         token,
 *         pool
 *     },
 *     -- If the value of &class is token, the following field shall appear
 *     numberOfTokens [5] IMPLICIT INTEGER OPTIONAL,
 *     -- If the value of &class is pool, the following field shall appear
 *     namedTokens [6] IMPLICIT SEQUENCE OF VisibleString OPTIONAL,
 *     eventCondition [7] IMPLICIT Event-Condition-instance
 * }
 * ```
 * 
 * @class
 */
export
class Semaphore_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: Semaphore_instance_definition_details_class,
        /**
         * @summary `numberOfTokens`.
         * @public
         * @readonly
         */
        readonly numberOfTokens: OPTIONAL<INTEGER>,
        /**
         * @summary `namedTokens`.
         * @public
         * @readonly
         */
        readonly namedTokens: OPTIONAL<VisibleString[]>,
        /**
         * @summary `eventCondition`.
         * @public
         * @readonly
         */
        readonly eventCondition: Event_Condition_instance
    ) {}

    /**
     * @summary Restructures an object into a Semaphore_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Semaphore_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Semaphore_instance_definition_details`.
     * @returns {Semaphore_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Semaphore_instance_definition_details)]: (Semaphore_instance_definition_details)[_K] }): Semaphore_instance_definition_details {
        return new Semaphore_instance_definition_details(_o.accessControl, _o.class_, _o.numberOfTokens, _o.namedTokens, _o.eventCondition);
    }

        /**
         * @summary The enum used as the type of the component `class_`
         * @public
         * @static
         */

    public static _enum_for_class_ = _enum_for_Semaphore_instance_definition_details_class;
}

/**
 * @summary The Leading Root Component Types of Semaphore_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Semaphore_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("numberOfTokens", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("namedTokens", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eventCondition", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of Semaphore_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Semaphore_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Semaphore_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Semaphore_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Semaphore_instance_definition_details: $.ASN1Decoder<Semaphore_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Semaphore_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Semaphore_instance_definition_details (el: _Element): Semaphore_instance_definition_details {
    if (!_cached_decoder_for_Semaphore_instance_definition_details) { _cached_decoder_for_Semaphore_instance_definition_details = function (el: _Element): Semaphore_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let class_!: Semaphore_instance_definition_details_class;
    let numberOfTokens: OPTIONAL<INTEGER>;
    let namedTokens: OPTIONAL<VisibleString[]>;
    let eventCondition!: Event_Condition_instance;
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<Semaphore_instance_definition_details_class>(() => _decode_Semaphore_instance_definition_details_class)(_el); },
        "numberOfTokens": (_el: _Element): void => { numberOfTokens = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "namedTokens": (_el: _Element): void => { namedTokens = $._decode_implicit<VisibleString[]>(() => $._decodeSequenceOf<VisibleString>(() => $._decodeVisibleString))(_el); },
        "eventCondition": (_el: _Element): void => { eventCondition = $._decode_implicit<Event_Condition_instance>(() => _decode_Event_Condition_instance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Semaphore_instance_definition_details,
        _extension_additions_list_spec_for_Semaphore_instance_definition_details,
        _root_component_type_list_2_spec_for_Semaphore_instance_definition_details,
        undefined,
    );
    return new Semaphore_instance_definition_details(
        accessControl,
        class_,
        numberOfTokens,
        namedTokens,
        eventCondition
    );
}; }
    return _cached_decoder_for_Semaphore_instance_definition_details(el);
}

let _cached_encoder_for_Semaphore_instance_definition_details: $.ASN1Encoder<Semaphore_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Semaphore_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Semaphore_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Semaphore_instance_definition_details (value: Semaphore_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Semaphore_instance_definition_details) { _cached_encoder_for_Semaphore_instance_definition_details = function (value: Semaphore_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Semaphore_instance_definition_details_class, $.BER)(value.class_, $.BER),
            /* IF_ABSENT  */ ((value.numberOfTokens === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.numberOfTokens, $.BER)),
            /* IF_ABSENT  */ ((value.namedTokens === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<VisibleString>(() => $._encodeVisibleString, $.BER), $.BER)(value.namedTokens, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Event_Condition_instance, $.BER)(value.eventCondition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Semaphore_instance_definition_details(value, elGetter);
}


/* eslint-enable */
