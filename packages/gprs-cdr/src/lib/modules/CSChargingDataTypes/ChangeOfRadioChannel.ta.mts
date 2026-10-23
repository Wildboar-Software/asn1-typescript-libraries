/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TrafficChannel, _decode_TrafficChannel, _encode_TrafficChannel, _enum_for_TrafficChannel } from "../CSChargingDataTypes/TrafficChannel.ta.mjs";


/**
 * @summary ChangeOfRadioChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfRadioChannel ::= SEQUENCE {
 *    radioChannel        [0] IMPLICIT TrafficChannel,
 *    changeTime          [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    speechVersionUsed   [2] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfRadioChannel {
    /**
     * @summary `radioChannel`.
     * @public
     * @readonly
     */
    readonly radioChannel: TrafficChannel;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `speechVersionUsed`.
     * @public
     * @readonly
     */
    readonly speechVersionUsed: OPTIONAL<OCTET_STRING>;

    constructor (
        radioChannel: TrafficChannel,
        changeTime: OCTET_STRING,
        speechVersionUsed?: OPTIONAL<OCTET_STRING>
    ) {
        this.radioChannel = radioChannel;
        this.changeTime = changeTime;
        this.speechVersionUsed = speechVersionUsed;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeOfRadioChannel.changeTime violates SIZE constraint");
        }
        if (this.speechVersionUsed !== undefined && (this.speechVersionUsed.length !== 1)) {
            throw new ASN1SizeError("ChangeOfRadioChannel.speechVersionUsed violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfRadioChannel
     * @description
     *
     * This takes an `object` and converts it to a `ChangeOfRadioChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfRadioChannel`.
     * @returns {ChangeOfRadioChannel}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfRadioChannel)]: (ChangeOfRadioChannel)[_K] }): ChangeOfRadioChannel {
        return new ChangeOfRadioChannel(_o.radioChannel, _o.changeTime, _o.speechVersionUsed);
    }

        /**
         * @summary The enum used as the type of the component `radioChannel`
         * @public
         * @static
         */

    public static _enum_for_radioChannel = _enum_for_TrafficChannel;
}

/**
 * @summary The Leading Root Component Types of ChangeOfRadioChannel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfRadioChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("radioChannel", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("speechVersionUsed", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfRadioChannel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfRadioChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfRadioChannel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfRadioChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfRadioChannel: $.ASN1Decoder<ChangeOfRadioChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfRadioChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfRadioChannel (el: _Element): ChangeOfRadioChannel {
    if (!_cached_decoder_for_ChangeOfRadioChannel) { _cached_decoder_for_ChangeOfRadioChannel = function (el: _Element): ChangeOfRadioChannel {
    let radioChannel!: TrafficChannel;
    let changeTime!: OCTET_STRING;
    let speechVersionUsed: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "radioChannel": (_el: _Element): void => { radioChannel = $._decode_implicit<TrafficChannel>(() => _decode_TrafficChannel)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "speechVersionUsed": (_el: _Element): void => { speechVersionUsed = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfRadioChannel,
        _extension_additions_list_spec_for_ChangeOfRadioChannel,
        _root_component_type_list_2_spec_for_ChangeOfRadioChannel,
        undefined,
    );
    return new ChangeOfRadioChannel(
        radioChannel,
        changeTime,
        speechVersionUsed
    );
}; }
    return _cached_decoder_for_ChangeOfRadioChannel(el);
}

let _cached_encoder_for_ChangeOfRadioChannel: $.ASN1Encoder<ChangeOfRadioChannel> | null = null;

/**
 * @summary Encodes a(n) ChangeOfRadioChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfRadioChannel, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfRadioChannel (value: ChangeOfRadioChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfRadioChannel) { _cached_encoder_for_ChangeOfRadioChannel = function (value: ChangeOfRadioChannel, _elGetter: $.ASN1Encoder<ChangeOfRadioChannel>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TrafficChannel, $.BER)(value.radioChannel, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.speechVersionUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.speechVersionUsed, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfRadioChannel(value, elGetter);
}


/* eslint-enable */
