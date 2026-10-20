/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition, ChangeCondition } from "../POCChargingDataTypes/ChangeCondition.ta.mjs";
// export { ChangeCondition, _enum_for_ChangeCondition, ChangeCondition_serviceChange /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_volumeLimit /* IMPORTED_LONG_ENUMERATION_ITEM */, volumeLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_timeLimit /* IMPORTED_LONG_ENUMERATION_ITEM */, timeLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_numberofTalkBurstLimit /* IMPORTED_LONG_ENUMERATION_ITEM */, numberofTalkBurstLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_numberofActiveParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, numberofActiveParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tariffTime /* IMPORTED_LONG_ENUMERATION_ITEM */, tariffTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCondition, _encode_ChangeCondition } from "../POCChargingDataTypes/ChangeCondition.ta.mjs";


/**
 * @summary ListofTalkBurstExchange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListofTalkBurstExchange ::= SET {
 *    number-Of-Talk-Bursts            [1] IMPLICIT INTEGER OPTIONAL,
 *    talk-Burst-Volume                [2] IMPLICIT INTEGER OPTIONAL,
 *    talk-Bursts-Time                 [3] IMPLICIT INTEGER OPTIONAL,
 *    number-Of-Received-Talk-Bursts   [4] IMPLICIT INTEGER OPTIONAL,
 *    received-Talk-Burst-Volume       [5] IMPLICIT INTEGER OPTIONAL,
 *    received-Talk-Burst-Time         [6] IMPLICIT INTEGER OPTIONAL,
 *    changeCondition                  [7] IMPLICIT ChangeCondition OPTIONAL,
 *    changeTime                       [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    numberofParticipants             [9] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ListofTalkBurstExchange {
    /**
     * @summary `number_Of_Talk_Bursts`.
     * @public
     * @readonly
     */
    readonly number_Of_Talk_Bursts: OPTIONAL<INTEGER>;
    /**
     * @summary `talk_Burst_Volume`.
     * @public
     * @readonly
     */
    readonly talk_Burst_Volume: OPTIONAL<INTEGER>;
    /**
     * @summary `talk_Bursts_Time`.
     * @public
     * @readonly
     */
    readonly talk_Bursts_Time: OPTIONAL<INTEGER>;
    /**
     * @summary `number_Of_Received_Talk_Bursts`.
     * @public
     * @readonly
     */
    readonly number_Of_Received_Talk_Bursts: OPTIONAL<INTEGER>;
    /**
     * @summary `received_Talk_Burst_Volume`.
     * @public
     * @readonly
     */
    readonly received_Talk_Burst_Volume: OPTIONAL<INTEGER>;
    /**
     * @summary `received_Talk_Burst_Time`.
     * @public
     * @readonly
     */
    readonly received_Talk_Burst_Time: OPTIONAL<INTEGER>;
    /**
     * @summary `changeCondition`.
     * @public
     * @readonly
     */
    readonly changeCondition: OPTIONAL<ChangeCondition>;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `numberofParticipants`.
     * @public
     * @readonly
     */
    readonly numberofParticipants: OPTIONAL<INTEGER>;

    constructor (
        number_Of_Talk_Bursts: OPTIONAL<INTEGER>,
        talk_Burst_Volume: OPTIONAL<INTEGER>,
        talk_Bursts_Time: OPTIONAL<INTEGER>,
        number_Of_Received_Talk_Bursts: OPTIONAL<INTEGER>,
        received_Talk_Burst_Volume: OPTIONAL<INTEGER>,
        received_Talk_Burst_Time: OPTIONAL<INTEGER>,
        changeCondition: OPTIONAL<ChangeCondition>,
        changeTime: OCTET_STRING,
        numberofParticipants: OPTIONAL<INTEGER>
    ) {
        this.number_Of_Talk_Bursts = number_Of_Talk_Bursts;
        this.talk_Burst_Volume = talk_Burst_Volume;
        this.talk_Bursts_Time = talk_Bursts_Time;
        this.number_Of_Received_Talk_Bursts = number_Of_Received_Talk_Bursts;
        this.received_Talk_Burst_Volume = received_Talk_Burst_Volume;
        this.received_Talk_Burst_Time = received_Talk_Burst_Time;
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.numberofParticipants = numberofParticipants;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ListofTalkBurstExchange.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ListofTalkBurstExchange
     * @description
     * 
     * This takes an `object` and converts it to a `ListofTalkBurstExchange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListofTalkBurstExchange`.
     * @returns {ListofTalkBurstExchange}
     */
    public static _from_object (_o: { [_K in keyof (ListofTalkBurstExchange)]: (ListofTalkBurstExchange)[_K] }): ListofTalkBurstExchange {
        return new ListofTalkBurstExchange(_o.number_Of_Talk_Bursts, _o.talk_Burst_Volume, _o.talk_Bursts_Time, _o.number_Of_Received_Talk_Bursts, _o.received_Talk_Burst_Volume, _o.received_Talk_Burst_Time, _o.changeCondition, _o.changeTime, _o.numberofParticipants);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;
}

/**
 * @summary The Leading Root Component Types of ListofTalkBurstExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListofTalkBurstExchange: $.ComponentSpec[] = [
    new $.ComponentSpec("number-Of-Talk-Bursts", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("talk-Burst-Volume", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("talk-Bursts-Time", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("number-Of-Received-Talk-Bursts", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("received-Talk-Burst-Volume", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("received-Talk-Burst-Time", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("changeCondition", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("numberofParticipants", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ListofTalkBurstExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListofTalkBurstExchange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListofTalkBurstExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListofTalkBurstExchange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListofTalkBurstExchange: $.ASN1Decoder<ListofTalkBurstExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListofTalkBurstExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListofTalkBurstExchange (el: _Element): ListofTalkBurstExchange {
    if (!_cached_decoder_for_ListofTalkBurstExchange) { _cached_decoder_for_ListofTalkBurstExchange = function (el: _Element): ListofTalkBurstExchange {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let number_Of_Talk_Bursts: OPTIONAL<INTEGER>;
    let talk_Burst_Volume: OPTIONAL<INTEGER>;
    let talk_Bursts_Time: OPTIONAL<INTEGER>;
    let number_Of_Received_Talk_Bursts: OPTIONAL<INTEGER>;
    let received_Talk_Burst_Volume: OPTIONAL<INTEGER>;
    let received_Talk_Burst_Time: OPTIONAL<INTEGER>;
    let changeCondition: OPTIONAL<ChangeCondition>;
    let changeTime!: OCTET_STRING;
    let numberofParticipants: OPTIONAL<INTEGER>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "number-Of-Talk-Bursts": (_el: _Element): void => { number_Of_Talk_Bursts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "talk-Burst-Volume": (_el: _Element): void => { talk_Burst_Volume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "talk-Bursts-Time": (_el: _Element): void => { talk_Bursts_Time = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "number-Of-Received-Talk-Bursts": (_el: _Element): void => { number_Of_Received_Talk_Bursts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "received-Talk-Burst-Volume": (_el: _Element): void => { received_Talk_Burst_Volume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "received-Talk-Burst-Time": (_el: _Element): void => { received_Talk_Burst_Time = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeCondition": (_el: _Element): void => { changeCondition = $._decode_implicit<ChangeCondition>(() => _decode_ChangeCondition)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberofParticipants": (_el: _Element): void => { numberofParticipants = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ListofTalkBurstExchange,
        _extension_additions_list_spec_for_ListofTalkBurstExchange,
        _root_component_type_list_2_spec_for_ListofTalkBurstExchange,
        undefined,
    );
    return new ListofTalkBurstExchange( /* SET_CONSTRUCTOR_CALL */
        number_Of_Talk_Bursts,
        talk_Burst_Volume,
        talk_Bursts_Time,
        number_Of_Received_Talk_Bursts,
        received_Talk_Burst_Volume,
        received_Talk_Burst_Time,
        changeCondition,
        changeTime,
        numberofParticipants
    );
}; }
    return _cached_decoder_for_ListofTalkBurstExchange(el);
}

let _cached_encoder_for_ListofTalkBurstExchange: $.ASN1Encoder<ListofTalkBurstExchange> | null = null;

/**
 * @summary Encodes a(n) ListofTalkBurstExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListofTalkBurstExchange, encoded as an ASN.1 Element.
 */
export
function _encode_ListofTalkBurstExchange (value: ListofTalkBurstExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListofTalkBurstExchange) { _cached_encoder_for_ListofTalkBurstExchange = function (value: ListofTalkBurstExchange, _elGetter: $.ASN1Encoder<ListofTalkBurstExchange>): _Element {
    const _components: _Element[] = [];
    if (value.number_Of_Talk_Bursts !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.number_Of_Talk_Bursts, $.BER));
    }
    if (value.talk_Burst_Volume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.talk_Burst_Volume, $.BER));
    }
    if (value.talk_Bursts_Time !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.talk_Bursts_Time, $.BER));
    }
    if (value.number_Of_Received_Talk_Bursts !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.number_Of_Received_Talk_Bursts, $.BER));
    }
    if (value.received_Talk_Burst_Volume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.received_Talk_Burst_Volume, $.BER));
    }
    if (value.received_Talk_Burst_Time !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.received_Talk_Burst_Time, $.BER));
    }
    if (value.changeCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ChangeCondition, $.BER)(value.changeCondition, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.numberofParticipants !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.numberofParticipants, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ListofTalkBurstExchange(value, elGetter);
}


/* eslint-enable */
