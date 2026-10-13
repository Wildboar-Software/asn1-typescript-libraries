/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTCTime,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
import { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
// export { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";


/**
 * @summary LIACTIVATEreq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIACTIVATEreq ::= SEQUENCE {
 *     timeStamp                UTCTime,
 *     invokeId                INTEGER,
 *     targetAddress           AddressType,
 *     expiryDateTime            UTCTime,
 *     -- This module uses AUTOMATIC TAGS: the two adjacent VisibleStrings will have different tags.
 *     targetname               VisibleString OPTIONAL,
 *     additionaltargetdata    VisibleString OPTIONAL,
 *     monitorServiceList       SEQUENCE OF ActivityType
 * }
 * ```
 * 
 * @class
 */
export
class LIACTIVATEreq {
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: UTCTime;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: INTEGER;
    /**
     * @summary `targetAddress`.
     * @public
     * @readonly
     */
    readonly targetAddress: AddressType;
    /**
     * @summary `expiryDateTime`.
     * @public
     * @readonly
     */
    readonly expiryDateTime: UTCTime;
    /**
     * @summary `targetname`.
     * @public
     * @readonly
     */
    readonly targetname: OPTIONAL<VisibleString>;
    /**
     * @summary `additionaltargetdata`.
     * @public
     * @readonly
     */
    readonly additionaltargetdata: OPTIONAL<VisibleString>;
    /**
     * @summary `monitorServiceList`.
     * @public
     * @readonly
     */
    readonly monitorServiceList: ActivityType[];

    constructor (
        timeStamp: UTCTime,
        invokeId: INTEGER,
        targetAddress: AddressType,
        expiryDateTime: UTCTime,
        targetname: OPTIONAL<VisibleString>,
        additionaltargetdata: OPTIONAL<VisibleString>,
        monitorServiceList: ActivityType[]
    ) {
        this.timeStamp = timeStamp;
        this.invokeId = invokeId;
        this.targetAddress = targetAddress;
        this.expiryDateTime = expiryDateTime;
        this.targetname = targetname;
        this.additionaltargetdata = additionaltargetdata;
        this.monitorServiceList = monitorServiceList;
    }

    /**
     * @summary Restructures an object into a LIACTIVATEreq
     * @description
     * 
     * This takes an `object` and converts it to a `LIACTIVATEreq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIACTIVATEreq`.
     * @returns {LIACTIVATEreq}
     */
    public static _from_object (_o: { [_K in keyof (LIACTIVATEreq)]: (LIACTIVATEreq)[_K] }): LIACTIVATEreq {
        return new LIACTIVATEreq(_o.timeStamp, _o.invokeId, _o.targetAddress, _o.expiryDateTime, _o.targetname, _o.additionaltargetdata, _o.monitorServiceList);
    }


}

/**
 * @summary The Leading Root Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("expiryDateTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetname", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionaltargetdata", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("monitorServiceList", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIACTIVATEreq: $.ASN1Decoder<LIACTIVATEreq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIACTIVATEreq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIACTIVATEreq (el: _Element): LIACTIVATEreq {
    if (!_cached_decoder_for_LIACTIVATEreq) { _cached_decoder_for_LIACTIVATEreq = function (el: _Element): LIACTIVATEreq {
    let timeStamp!: UTCTime;
    let invokeId!: INTEGER;
    let targetAddress!: AddressType;
    let expiryDateTime!: UTCTime;
    let targetname: OPTIONAL<VisibleString>;
    let additionaltargetdata: OPTIONAL<VisibleString>;
    let monitorServiceList!: ActivityType[];
    const callbacks: $.DecodingMap = {
        "timeStamp": (_el: _Element): void => { timeStamp = $._decodeUTCTime(_el); },
        "invokeId": (_el: _Element): void => { invokeId = $._decodeInteger(_el); },
        "targetAddress": (_el: _Element): void => { targetAddress = _decode_AddressType(_el); },
        "expiryDateTime": (_el: _Element): void => { expiryDateTime = $._decodeUTCTime(_el); },
        "targetname": (_el: _Element): void => { targetname = $._decodeVisibleString(_el); },
        "additionaltargetdata": (_el: _Element): void => { additionaltargetdata = $._decodeVisibleString(_el); },
        "monitorServiceList": (_el: _Element): void => { monitorServiceList = $._decodeSequenceOf<ActivityType>(() => _decode_ActivityType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LIACTIVATEreq,
        _extension_additions_list_spec_for_LIACTIVATEreq,
        _root_component_type_list_2_spec_for_LIACTIVATEreq,
        undefined,
    );
    return new LIACTIVATEreq(
        timeStamp,
        invokeId,
        targetAddress,
        expiryDateTime,
        targetname,
        additionaltargetdata,
        monitorServiceList
    );
}; }
    return _cached_decoder_for_LIACTIVATEreq(el);
}

let _cached_encoder_for_LIACTIVATEreq: $.ASN1Encoder<LIACTIVATEreq> | null = null;

/**
 * @summary Encodes a(n) LIACTIVATEreq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIACTIVATEreq, encoded as an ASN.1 Element.
 */
export
function _encode_LIACTIVATEreq (value: LIACTIVATEreq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIACTIVATEreq) { _cached_encoder_for_LIACTIVATEreq = function (value: LIACTIVATEreq, elGetter: $.ASN1Encoder<LIACTIVATEreq>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTCTime, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.invokeId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AddressType, $.BER)(value.targetAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTCTime, $.BER)(value.expiryDateTime, $.BER);
    if (value.targetname !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.targetname, $.BER);
    }
    if (value.additionaltargetdata !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.additionaltargetdata, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ActivityType>(() => _encode_ActivityType, $.BER), $.BER)(value.monitorServiceList, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LIACTIVATEreq(value, elGetter);
}


/* eslint-enable */
