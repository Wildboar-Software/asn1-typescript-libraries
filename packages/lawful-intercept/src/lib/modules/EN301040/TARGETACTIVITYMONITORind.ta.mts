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
import { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
// export { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";


/**
 * @summary TARGETACTIVITYMONITORind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETACTIVITYMONITORind ::= SEQUENCE {
 *         tLIInstanceid                TLIIdType, -- header, who
 *         timestamp                    UTCTime, -- header, when
 *         targetLocation                LocationType, -- header, where
 *         targetAction                   ActivityType,
 *         supplementaryTargetaddress     AddressType OPTIONAL,
 *         cotargetaddress              SEQUENCE OF AddressType OPTIONAL,
 *         cotargetlocation              SEQUENCE OF LocationType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TARGETACTIVITYMONITORind {
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
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: LocationType;
    /**
     * @summary `targetAction`.
     * @public
     * @readonly
     */
    readonly targetAction: ActivityType;
    /**
     * @summary `supplementaryTargetaddress`.
     * @public
     * @readonly
     */
    readonly supplementaryTargetaddress: OPTIONAL<AddressType>;
    /**
     * @summary `cotargetaddress`.
     * @public
     * @readonly
     */
    readonly cotargetaddress: OPTIONAL<AddressType[]>;
    /**
     * @summary `cotargetlocation`.
     * @public
     * @readonly
     */
    readonly cotargetlocation: OPTIONAL<LocationType[]>;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        targetLocation: LocationType,
        targetAction: ActivityType,
        supplementaryTargetaddress: OPTIONAL<AddressType>,
        cotargetaddress: OPTIONAL<AddressType[]>,
        cotargetlocation: OPTIONAL<LocationType[]>
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.targetLocation = targetLocation;
        this.targetAction = targetAction;
        this.supplementaryTargetaddress = supplementaryTargetaddress;
        this.cotargetaddress = cotargetaddress;
        this.cotargetlocation = cotargetlocation;
    }

    /**
     * @summary Restructures an object into a TARGETACTIVITYMONITORind
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETACTIVITYMONITORind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETACTIVITYMONITORind`.
     * @returns {TARGETACTIVITYMONITORind}
     */
    public static _from_object (_o: { [_K in keyof (TARGETACTIVITYMONITORind)]: (TARGETACTIVITYMONITORind)[_K] }): TARGETACTIVITYMONITORind {
        return new TARGETACTIVITYMONITORind(_o.tLIInstanceid, _o.timestamp, _o.targetLocation, _o.targetAction, _o.supplementaryTargetaddress, _o.cotargetaddress, _o.cotargetlocation);
    }


}

/**
 * @summary The Leading Root Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetLocation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetAction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("supplementaryTargetaddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cotargetaddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cotargetlocation", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETACTIVITYMONITORind: $.ASN1Decoder<TARGETACTIVITYMONITORind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETACTIVITYMONITORind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETACTIVITYMONITORind (el: _Element): TARGETACTIVITYMONITORind {
    if (!_cached_decoder_for_TARGETACTIVITYMONITORind) { _cached_decoder_for_TARGETACTIVITYMONITORind = function (el: _Element): TARGETACTIVITYMONITORind {
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let targetLocation!: LocationType;
    let targetAction!: ActivityType;
    let supplementaryTargetaddress: OPTIONAL<AddressType>;
    let cotargetaddress: OPTIONAL<AddressType[]>;
    let cotargetlocation: OPTIONAL<LocationType[]>;
    const callbacks: $.DecodingMap = {
        "tLIInstanceid": (_el: _Element): void => { tLIInstanceid = _decode_TLIIdType(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decodeUTCTime(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = _decode_LocationType(_el); },
        "targetAction": (_el: _Element): void => { targetAction = _decode_ActivityType(_el); },
        "supplementaryTargetaddress": (_el: _Element): void => { supplementaryTargetaddress = _decode_AddressType(_el); },
        "cotargetaddress": (_el: _Element): void => { cotargetaddress = $._decodeSequenceOf<AddressType>(() => _decode_AddressType)(_el); },
        "cotargetlocation": (_el: _Element): void => { cotargetlocation = $._decodeSequenceOf<LocationType>(() => _decode_LocationType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TARGETACTIVITYMONITORind,
        _extension_additions_list_spec_for_TARGETACTIVITYMONITORind,
        _root_component_type_list_2_spec_for_TARGETACTIVITYMONITORind,
        undefined,
    );
    return new TARGETACTIVITYMONITORind(
        tLIInstanceid,
        timestamp,
        targetLocation,
        targetAction,
        supplementaryTargetaddress,
        cotargetaddress,
        cotargetlocation
    );
}; }
    return _cached_decoder_for_TARGETACTIVITYMONITORind(el);
}

let _cached_encoder_for_TARGETACTIVITYMONITORind: $.ASN1Encoder<TARGETACTIVITYMONITORind> | null = null;

/**
 * @summary Encodes a(n) TARGETACTIVITYMONITORind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETACTIVITYMONITORind, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETACTIVITYMONITORind (value: TARGETACTIVITYMONITORind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETACTIVITYMONITORind) { _cached_encoder_for_TARGETACTIVITYMONITORind = function (value: TARGETACTIVITYMONITORind, elGetter: $.ASN1Encoder<TARGETACTIVITYMONITORind>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LocationType, $.BER)(value.targetLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ActivityType, $.BER)(value.targetAction, $.BER);
    if (value.supplementaryTargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AddressType, $.BER)(value.supplementaryTargetaddress, $.BER);
    }
    if (value.cotargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AddressType>(() => _encode_AddressType, $.BER), $.BER)(value.cotargetaddress, $.BER);
    }
    if (value.cotargetlocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<LocationType>(() => _encode_LocationType, $.BER), $.BER)(value.cotargetlocation, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TARGETACTIVITYMONITORind(value, elGetter);
}


/* eslint-enable */
