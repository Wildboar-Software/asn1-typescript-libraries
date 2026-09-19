/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CCLink_State, _decode_CCLink_State, _encode_CCLink_State, _enum_for_CCLink_State } from "../HI2Operations/CCLink-State.ta.mjs";
// export { CCLink_State, _enum_for_CCLink_State, CCLink_State_setUpInProcess /* IMPORTED_LONG_ENUMERATION_ITEM */, setUpInProcess /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_callActive /* IMPORTED_LONG_ENUMERATION_ITEM */, callActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_callReleased /* IMPORTED_LONG_ENUMERATION_ITEM */, callReleased /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_lack_of_resource /* IMPORTED_LONG_ENUMERATION_ITEM */, lack_of_resource /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CCLink_State, _encode_CCLink_State } from "../HI2Operations/CCLink-State.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";


/**
 * @summary CallContentLinkCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallContentLinkCharacteristics ::= SEQUENCE
 * {
 *     cCLink-State            [1] CCLink-State OPTIONAL,
 *         -- current state of the CCLink
 *     release-Time            [2] TimeStamp OPTIONAL,
 *         -- date and time of the release of the Call Content Link.
 *     release-Reason            [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *         -- Release cause coded in Q.850 [31] format
 *     lEMF-Address            [4] CalledPartyNumber OPTIONAL,
 *         -- Directory number used to route the call toward the LEMF
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CallContentLinkCharacteristics {
    constructor (
        /**
         * @summary `cCLink_State`.
         * @public
         * @readonly
         */
        readonly cCLink_State: OPTIONAL<CCLink_State>,
        /**
         * @summary `release_Time`.
         * @public
         * @readonly
         */
        readonly release_Time: OPTIONAL<TimeStamp>,
        /**
         * @summary `release_Reason`.
         * @public
         * @readonly
         */
        readonly release_Reason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lEMF_Address`.
         * @public
         * @readonly
         */
        readonly lEMF_Address: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallContentLinkCharacteristics
     * @description
     * 
     * This takes an `object` and converts it to a `CallContentLinkCharacteristics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallContentLinkCharacteristics`.
     * @returns {CallContentLinkCharacteristics}
     */
    public static _from_object (_o: { [_K in keyof (CallContentLinkCharacteristics)]: (CallContentLinkCharacteristics)[_K] }): CallContentLinkCharacteristics {
        return new CallContentLinkCharacteristics(_o.cCLink_State, _o.release_Time, _o.release_Reason, _o.lEMF_Address, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cCLink_State`
         * @public
         * @static
         */

    public static _enum_for_cCLink_State = _enum_for_CCLink_State;
}

/**
 * @summary The Leading Root Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("cCLink-State", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("release-Time", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("release-Reason", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("lEMF-Address", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallContentLinkCharacteristics: $.ASN1Decoder<CallContentLinkCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallContentLinkCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallContentLinkCharacteristics (el: _Element): CallContentLinkCharacteristics {
    if (!_cached_decoder_for_CallContentLinkCharacteristics) { _cached_decoder_for_CallContentLinkCharacteristics = function (el: _Element): CallContentLinkCharacteristics {
    let cCLink_State: OPTIONAL<CCLink_State>;
    let release_Time: OPTIONAL<TimeStamp>;
    let release_Reason: OPTIONAL<OCTET_STRING>;
    let lEMF_Address: OPTIONAL<CalledPartyNumber>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCLink-State": (_el: _Element): void => { cCLink_State = $._decode_implicit<CCLink_State>(() => _decode_CCLink_State)(_el); },
        "release-Time": (_el: _Element): void => { release_Time = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "release-Reason": (_el: _Element): void => { release_Reason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lEMF-Address": (_el: _Element): void => { lEMF_Address = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallContentLinkCharacteristics,
        _extension_additions_list_spec_for_CallContentLinkCharacteristics,
        _root_component_type_list_2_spec_for_CallContentLinkCharacteristics,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallContentLinkCharacteristics(
        cCLink_State,
        release_Time,
        release_Reason,
        lEMF_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallContentLinkCharacteristics(el);
}

let _cached_encoder_for_CallContentLinkCharacteristics: $.ASN1Encoder<CallContentLinkCharacteristics> | null = null;

/**
 * @summary Encodes a(n) CallContentLinkCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallContentLinkCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_CallContentLinkCharacteristics (value: CallContentLinkCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallContentLinkCharacteristics) { _cached_encoder_for_CallContentLinkCharacteristics = function (value: CallContentLinkCharacteristics, elGetter: $.ASN1Encoder<CallContentLinkCharacteristics>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cCLink_State === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CCLink_State, $.BER)(value.cCLink_State, $.BER)),
            /* IF_ABSENT  */ ((value.release_Time === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.release_Time, $.BER)),
            /* IF_ABSENT  */ ((value.release_Reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.release_Reason, $.BER)),
            /* IF_ABSENT  */ ((value.lEMF_Address === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_CalledPartyNumber, $.BER)(value.lEMF_Address, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallContentLinkCharacteristics(value, elGetter);
}


/* eslint-enable */
