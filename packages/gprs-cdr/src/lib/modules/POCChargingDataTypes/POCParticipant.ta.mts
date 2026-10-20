/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_InvolvedParty, _encode_InvolvedParty, InvolvedParty } from "../POCChargingDataTypes/InvolvedParty.ta.mjs";
import { _decode_AccessPriority, _encode_AccessPriority, _enum_for_AccessPriority, AccessPriority } from "../POCChargingDataTypes/AccessPriority.ta.mjs";
import { _decode_ParticipatingType, _encode_ParticipatingType, _enum_for_ParticipatingType, ParticipatingType } from "../POCChargingDataTypes/ParticipatingType.ta.mjs";


/**
 * @summary POCParticipant
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCParticipant ::= SET {
 *    called-party-address          [1] InvolvedParty,
 *    participant-access-priority   [2] IMPLICIT AccessPriority OPTIONAL,
 *    user-participating-type       [3] IMPLICIT ParticipatingType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class POCParticipant {
    /**
     * @summary `called_party_address`.
     * @public
     * @readonly
     */
    readonly called_party_address: InvolvedParty;
    /**
     * @summary `participant_access_priority`.
     * @public
     * @readonly
     */
    readonly participant_access_priority: OPTIONAL<AccessPriority>;
    /**
     * @summary `user_participating_type`.
     * @public
     * @readonly
     */
    readonly user_participating_type: OPTIONAL<ParticipatingType>;

    constructor (
        called_party_address: InvolvedParty,
        participant_access_priority: OPTIONAL<AccessPriority>,
        user_participating_type: OPTIONAL<ParticipatingType>
    ) {
        this.called_party_address = called_party_address;
        this.participant_access_priority = participant_access_priority;
        this.user_participating_type = user_participating_type;
    }

    /**
     * @summary Restructures an object into a POCParticipant
     * @description
     * 
     * This takes an `object` and converts it to a `POCParticipant`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `POCParticipant`.
     * @returns {POCParticipant}
     */
    public static _from_object (_o: { [_K in keyof (POCParticipant)]: (POCParticipant)[_K] }): POCParticipant {
        return new POCParticipant(_o.called_party_address, _o.participant_access_priority, _o.user_participating_type);
    }

        /**
         * @summary The enum used as the type of the component `participant_access_priority`
         * @public
         * @static
         */

    public static _enum_for_participant_access_priority = _enum_for_AccessPriority;        /**
         * @summary The enum used as the type of the component `user_participating_type`
         * @public
         * @static
         */

    public static _enum_for_user_participating_type = _enum_for_ParticipatingType;
}

/**
 * @summary The Leading Root Component Types of POCParticipant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_POCParticipant: $.ComponentSpec[] = [
    new $.ComponentSpec("called-party-address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("participant-access-priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("user-participating-type", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of POCParticipant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_POCParticipant: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of POCParticipant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_POCParticipant: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_POCParticipant: $.ASN1Decoder<POCParticipant> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) POCParticipant
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_POCParticipant (el: _Element): POCParticipant {
    if (!_cached_decoder_for_POCParticipant) { _cached_decoder_for_POCParticipant = function (el: _Element): POCParticipant {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let called_party_address!: InvolvedParty;
    let participant_access_priority: OPTIONAL<AccessPriority>;
    let user_participating_type: OPTIONAL<ParticipatingType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "called-party-address": (_el: _Element): void => { called_party_address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "participant-access-priority": (_el: _Element): void => { participant_access_priority = $._decode_implicit<AccessPriority>(() => _decode_AccessPriority)(_el); },
        "user-participating-type": (_el: _Element): void => { user_participating_type = $._decode_implicit<ParticipatingType>(() => _decode_ParticipatingType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_POCParticipant,
        _extension_additions_list_spec_for_POCParticipant,
        _root_component_type_list_2_spec_for_POCParticipant,
        undefined,
    );
    return new POCParticipant( /* SET_CONSTRUCTOR_CALL */
        called_party_address,
        participant_access_priority,
        user_participating_type
    );
}; }
    return _cached_decoder_for_POCParticipant(el);
}

let _cached_encoder_for_POCParticipant: $.ASN1Encoder<POCParticipant> | null = null;

/**
 * @summary Encodes a(n) POCParticipant into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POCParticipant, encoded as an ASN.1 Element.
 */
export
function _encode_POCParticipant (value: POCParticipant, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_POCParticipant) { _cached_encoder_for_POCParticipant = function (value: POCParticipant, _elGetter: $.ASN1Encoder<POCParticipant>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_InvolvedParty, $.BER)(value.called_party_address, $.BER));
    if (value.participant_access_priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessPriority, $.BER)(value.participant_access_priority, $.BER));
    }
    if (value.user_participating_type !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ParticipatingType, $.BER)(value.user_participating_type, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_POCParticipant(value, elGetter);
}


/* eslint-enable */
