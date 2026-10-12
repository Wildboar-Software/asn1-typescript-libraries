/* eslint-disable */
import {
    OPTIONAL,
    UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
import { CircuitIdType, _decode_CircuitIdType, _encode_CircuitIdType } from "../EN301040/CircuitIdType.ta.mjs";
// export { CircuitIdType, _decode_CircuitIdType, _encode_CircuitIdType } from "../EN301040/CircuitIdType.ta.mjs";


/**
 * @summary TARGETCOMMSMONITORind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETCOMMSMONITORind ::= SEQUENCE {
 *         tLIInstanceid                TLIIdType,
 *         timestamp                    UTCTime,
 *         targetlocation               LocationType,
 *         supplementaryTargetaddress    AddressType OPTIONAL,
 *         targetcommsid               CircuitIdType,
 *         cotargetaddress               SEQUENCE OF AddressType OPTIONAL,
 *         cotargetcommsid              SEQUENCE OF CircuitIdType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TARGETCOMMSMONITORind {
    /**
     * @summary `tLIInstanceid`.
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `timestamp`.
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetlocation`.
     * @public
     * @readonly
     */
    readonly targetlocation: LocationType;
    /**
     * @summary `supplementaryTargetaddress`.
     * @public
     * @readonly
     */
    readonly supplementaryTargetaddress: OPTIONAL<AddressType>;
    /**
     * @summary `targetcommsid`.
     * @public
     * @readonly
     */
    readonly targetcommsid: CircuitIdType;
    /**
     * @summary `cotargetaddress`.
     * @public
     * @readonly
     */
    readonly cotargetaddress: OPTIONAL<AddressType[]>;
    /**
     * @summary `cotargetcommsid`.
     * @public
     * @readonly
     */
    readonly cotargetcommsid: OPTIONAL<CircuitIdType[]>;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        targetlocation: LocationType,
        supplementaryTargetaddress: OPTIONAL<AddressType>,
        targetcommsid: CircuitIdType,
        cotargetaddress: OPTIONAL<AddressType[]>,
        cotargetcommsid: OPTIONAL<CircuitIdType[]>
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.targetlocation = targetlocation;
        this.supplementaryTargetaddress = supplementaryTargetaddress;
        this.targetcommsid = targetcommsid;
        this.cotargetaddress = cotargetaddress;
        this.cotargetcommsid = cotargetcommsid;
    }

    /**
     * @summary Restructures an object into a TARGETCOMMSMONITORind
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETCOMMSMONITORind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETCOMMSMONITORind`.
     * @returns {TARGETCOMMSMONITORind}
     */
    public static _from_object (_o: { [_K in keyof (TARGETCOMMSMONITORind)]: (TARGETCOMMSMONITORind)[_K] }): TARGETCOMMSMONITORind {
        return new TARGETCOMMSMONITORind(_o.tLIInstanceid, _o.timestamp, _o.targetlocation, _o.supplementaryTargetaddress, _o.targetcommsid, _o.cotargetaddress, _o.cotargetcommsid);
    }


}

/**
 * @summary The Leading Root Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetlocation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supplementaryTargetaddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetcommsid", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cotargetaddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cotargetcommsid", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETCOMMSMONITORind: $.ASN1Decoder<TARGETCOMMSMONITORind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETCOMMSMONITORind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETCOMMSMONITORind (el: _Element): TARGETCOMMSMONITORind {
    if (!_cached_decoder_for_TARGETCOMMSMONITORind) { _cached_decoder_for_TARGETCOMMSMONITORind = function (el: _Element): TARGETCOMMSMONITORind {
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let targetlocation!: LocationType;
    let supplementaryTargetaddress: OPTIONAL<AddressType>;
    let targetcommsid!: CircuitIdType;
    let cotargetaddress: OPTIONAL<AddressType[]>;
    let cotargetcommsid: OPTIONAL<CircuitIdType[]>;
    const callbacks: $.DecodingMap = {
        "tLIInstanceid": (_el: _Element): void => { tLIInstanceid = _decode_TLIIdType(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decodeUTCTime(_el); },
        "targetlocation": (_el: _Element): void => { targetlocation = _decode_LocationType(_el); },
        "supplementaryTargetaddress": (_el: _Element): void => { supplementaryTargetaddress = _decode_AddressType(_el); },
        "targetcommsid": (_el: _Element): void => { targetcommsid = _decode_CircuitIdType(_el); },
        "cotargetaddress": (_el: _Element): void => { cotargetaddress = $._decodeSequenceOf<AddressType>(() => _decode_AddressType)(_el); },
        "cotargetcommsid": (_el: _Element): void => { cotargetcommsid = $._decodeSequenceOf<CircuitIdType>(() => _decode_CircuitIdType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TARGETCOMMSMONITORind,
        _extension_additions_list_spec_for_TARGETCOMMSMONITORind,
        _root_component_type_list_2_spec_for_TARGETCOMMSMONITORind,
        undefined,
    );
    return new TARGETCOMMSMONITORind(
        tLIInstanceid,
        timestamp,
        targetlocation,
        supplementaryTargetaddress,
        targetcommsid,
        cotargetaddress,
        cotargetcommsid
    );
}; }
    return _cached_decoder_for_TARGETCOMMSMONITORind(el);
}

let _cached_encoder_for_TARGETCOMMSMONITORind: $.ASN1Encoder<TARGETCOMMSMONITORind> | null = null;

/**
 * @summary Encodes a(n) TARGETCOMMSMONITORind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETCOMMSMONITORind, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETCOMMSMONITORind (value: TARGETCOMMSMONITORind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETCOMMSMONITORind) { _cached_encoder_for_TARGETCOMMSMONITORind = function (value: TARGETCOMMSMONITORind, elGetter: $.ASN1Encoder<TARGETCOMMSMONITORind>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LocationType, $.BER)(value.targetlocation, $.BER);
    if (value.supplementaryTargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AddressType, $.BER)(value.supplementaryTargetaddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_CircuitIdType, $.BER)(value.targetcommsid, $.BER);
    if (value.cotargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AddressType>(() => _encode_AddressType, $.BER), $.BER)(value.cotargetaddress, $.BER);
    }
    if (value.cotargetcommsid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<CircuitIdType>(() => _encode_CircuitIdType, $.BER), $.BER)(value.cotargetcommsid, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TARGETCOMMSMONITORind(value, elGetter);
}


/* eslint-enable */
