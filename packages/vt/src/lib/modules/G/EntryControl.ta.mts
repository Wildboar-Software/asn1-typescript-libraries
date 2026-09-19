/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
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
import { EntryControl_feirList_Item, _decode_EntryControl_feirList_Item, _encode_EntryControl_feirList_Item } from "../G/EntryControl-feirList-Item.ta.mjs";
// export { EntryControl_feirList_Item, _decode_EntryControl_feirList_Item, _encode_EntryControl_feirList_Item } from "../G/EntryControl-feirList-Item.ta.mjs";
import { EntryControl_feprList_Item, _decode_EntryControl_feprList_Item, _encode_EntryControl_feprList_Item } from "../G/EntryControl-feprList-Item.ta.mjs";
// export { EntryControl_feprList_Item, _decode_EntryControl_feprList_Item, _encode_EntryControl_feprList_Item } from "../G/EntryControl-feprList-Item.ta.mjs";


/**
 * @summary EntryControl
 * @description
 *
 * FDR entry-control: device-object list, FEIR list, FEPR list.
 * Update rules when FDCOupdate tag 8 is present and non-empty: empty
 * instance ⇒ no action; missing part ⇒ that part unchanged;
 * present-empty part ⇒ discarded; present-nonempty ⇒ full replace
 * (no partial list update). ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryControl ::= SEQUENCE {
 *     deviceObjectList    [0] IMPLICIT SEQUENCE OF PrintableString OPTIONAL,
 *     feirList            [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *         feicoName PrintableString,
 *         recordIndex INTEGER
 *     } OPTIONAL,
 *     feprList            [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         fepcoName PrintableString,
 *         recordIndex INTEGER
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EntryControl {
    constructor (
        /**
         * @summary `deviceObjectList`.
         * @description
         * Names of device objects. Absent ⇒ unchanged; present-empty ⇒
         * discarded. ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly deviceObjectList: OPTIONAL<PrintableString[]>,
        /**
         * @summary `feirList`.
         * @description
         * Field Entry Instruction Records (FEICO name + index). Absent ⇒
         * unchanged; present-empty ⇒ discarded. ISO/IEC 9040:1997
         * §3.3.62; ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly feirList: OPTIONAL<EntryControl_feirList_Item[]>,
        /**
         * @summary `feprList`.
         * @description
         * Field Entry Pilot Records (FEPCO name + index). Absent ⇒
         * unchanged; present-empty ⇒ discarded. ISO/IEC 9040:1997
         * §3.3.63; ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly feprList: OPTIONAL<EntryControl_feprList_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a EntryControl
     * @description
     * 
     * This takes an `object` and converts it to a `EntryControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryControl`.
     * @returns {EntryControl}
     */
    public static _from_object (_o: { [_K in keyof (EntryControl)]: (EntryControl)[_K] }): EntryControl {
        return new EntryControl(_o.deviceObjectList, _o.feirList, _o.feprList);
    }


}

/**
 * @summary The Leading Root Component Types of EntryControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryControl: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceObjectList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("feirList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("feprList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EntryControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryControl: $.ASN1Decoder<EntryControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryControl (el: _Element): EntryControl {
    if (!_cached_decoder_for_EntryControl) { _cached_decoder_for_EntryControl = function (el: _Element): EntryControl {
    let deviceObjectList: OPTIONAL<PrintableString[]>;
    let feirList: OPTIONAL<EntryControl_feirList_Item[]>;
    let feprList: OPTIONAL<EntryControl_feprList_Item[]>;
    const callbacks: $.DecodingMap = {
        "deviceObjectList": (_el: _Element): void => { deviceObjectList = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); },
        "feirList": (_el: _Element): void => { feirList = $._decode_implicit<EntryControl_feirList_Item[]>(() => $._decodeSequenceOf<EntryControl_feirList_Item>(() => _decode_EntryControl_feirList_Item))(_el); },
        "feprList": (_el: _Element): void => { feprList = $._decode_implicit<EntryControl_feprList_Item[]>(() => $._decodeSequenceOf<EntryControl_feprList_Item>(() => _decode_EntryControl_feprList_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntryControl,
        _extension_additions_list_spec_for_EntryControl,
        _root_component_type_list_2_spec_for_EntryControl,
        undefined,
    );
    return new EntryControl(
        deviceObjectList,
        feirList,
        feprList
    );
}; }
    return _cached_decoder_for_EntryControl(el);
}

let _cached_encoder_for_EntryControl: $.ASN1Encoder<EntryControl> | null = null;

/**
 * @summary Encodes a(n) EntryControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryControl, encoded as an ASN.1 Element.
 */
export
function _encode_EntryControl (value: EntryControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryControl) { _cached_encoder_for_EntryControl = function (value: EntryControl): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.deviceObjectList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.deviceObjectList, $.BER)),
            /* IF_ABSENT  */ ((value.feirList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<EntryControl_feirList_Item>(() => _encode_EntryControl_feirList_Item, $.BER), $.BER)(value.feirList, $.BER)),
            /* IF_ABSENT  */ ((value.feprList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<EntryControl_feprList_Item>(() => _encode_EntryControl_feprList_Item, $.BER), $.BER)(value.feprList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryControl(value, elGetter);
}


/* eslint-enable */
