/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SwitchoverTime, _decode_SwitchoverTime, _encode_SwitchoverTime } from "../CSChargingDataTypes/SwitchoverTime.ta.mjs";
// export { SwitchoverTime, _decode_SwitchoverTime, _encode_SwitchoverTime } from "../CSChargingDataTypes/SwitchoverTime.ta.mjs";


/**
 * @summary TariffPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPeriod ::= SEQUENCE {
 *    switchoverTime   [0] IMPLICIT SwitchoverTime,
 *    tariffId         [1] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class TariffPeriod {
    /**
     * @summary `switchoverTime`.
     * @public
     * @readonly
     */
    readonly switchoverTime: SwitchoverTime;
    /**
     * @summary `tariffId`.
     * @public
     * @readonly
     */
    readonly tariffId: INTEGER;

    constructor (
        switchoverTime: SwitchoverTime,
        tariffId: INTEGER
    ) {
        this.switchoverTime = switchoverTime;
        this.tariffId = tariffId;
    }

    /**
     * @summary Restructures an object into a TariffPeriod
     * @description
     * 
     * This takes an `object` and converts it to a `TariffPeriod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffPeriod`.
     * @returns {TariffPeriod}
     */
    public static _from_object (_o: { [_K in keyof (TariffPeriod)]: (TariffPeriod)[_K] }): TariffPeriod {
        return new TariffPeriod(_o.switchoverTime, _o.tariffId);
    }


}

/**
 * @summary The Leading Root Component Types of TariffPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffPeriod: $.ComponentSpec[] = [
    new $.ComponentSpec("switchoverTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffId", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TariffPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffPeriod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffPeriod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffPeriod: $.ASN1Decoder<TariffPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffPeriod (el: _Element): TariffPeriod {
    if (!_cached_decoder_for_TariffPeriod) { _cached_decoder_for_TariffPeriod = function (el: _Element): TariffPeriod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TariffPeriod contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "switchoverTime";
    sequence[1].name = "tariffId";
    let switchoverTime!: SwitchoverTime;
    let tariffId!: INTEGER;
    switchoverTime = $._decode_implicit<SwitchoverTime>(() => _decode_SwitchoverTime)(sequence[0]);
    tariffId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new TariffPeriod(
        switchoverTime,
        tariffId,

    );
}; }
    return _cached_decoder_for_TariffPeriod(el);
}

let _cached_encoder_for_TariffPeriod: $.ASN1Encoder<TariffPeriod> | null = null;

/**
 * @summary Encodes a(n) TariffPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_TariffPeriod (value: TariffPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffPeriod) { _cached_encoder_for_TariffPeriod = function (value: TariffPeriod, _elGetter: $.ASN1Encoder<TariffPeriod>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SwitchoverTime, $.BER)(value.switchoverTime, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tariffId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TariffPeriod(value, elGetter);
}


/* eslint-enable */
