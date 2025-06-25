/* eslint-disable */
import {
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
import { BdcPKCInformation, _decode_BdcPKCInformation, _encode_BdcPKCInformation } from "../TAI/BdcPKCInformation.ta.mjs";
import { BPUReportInformation, _decode_BPUReportInformation, _encode_BPUReportInformation } from "../TAI/BPUReportInformation.ta.mjs";

/**
 * @summary BDCReportContentInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDCReportContentInformation ::= SEQUENCE {
 *   bdcPKCInformation     BdcPKCInformation,
 *   bdcReportInformation  BPUReportInformation
 * }
 * ```
 * 
 * @class
 */
export
class BDCReportContentInformation {
    constructor (
        /**
         * @summary `bdcPKCInformation`.
         * @public
         * @readonly
         */
        readonly bdcPKCInformation: BdcPKCInformation,
        /**
         * @summary `bdcReportInformation`.
         * @public
         * @readonly
         */
        readonly bdcReportInformation: BPUReportInformation
    ) {}

    /**
     * @summary Restructures an object into a BDCReportContentInformation
     * @description
     * 
     * This takes an `object` and converts it to a `BDCReportContentInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDCReportContentInformation`.
     * @returns {BDCReportContentInformation}
     */
    public static _from_object (_o: { [_K in keyof (BDCReportContentInformation)]: (BDCReportContentInformation)[_K] }): BDCReportContentInformation {
        return new BDCReportContentInformation(_o.bdcPKCInformation, _o.bdcReportInformation);
    }


}

/**
 * @summary The Leading Root Component Types of BDCReportContentInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDCReportContentInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("bdcPKCInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdcReportInformation", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BDCReportContentInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDCReportContentInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDCReportContentInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDCReportContentInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDCReportContentInformation: $.ASN1Decoder<BDCReportContentInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDCReportContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDCReportContentInformation} The decoded data structure.
 */
export
function _decode_BDCReportContentInformation (el: _Element): BDCReportContentInformation {
    if (!_cached_decoder_for_BDCReportContentInformation) { _cached_decoder_for_BDCReportContentInformation = function (el: _Element): BDCReportContentInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BDCReportContentInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bdcPKCInformation";
    sequence[1].name = "bdcReportInformation";
    let bdcPKCInformation!: BdcPKCInformation;
    let bdcReportInformation!: BPUReportInformation;
    bdcPKCInformation = _decode_BdcPKCInformation(sequence[0]);
    bdcReportInformation = _decode_BPUReportInformation(sequence[1]);
    return new BDCReportContentInformation(
        bdcPKCInformation,
        bdcReportInformation,

    );
}; }
    return _cached_decoder_for_BDCReportContentInformation(el);
}

let _cached_encoder_for_BDCReportContentInformation: $.ASN1Encoder<BDCReportContentInformation> | null = null;

/**
 * @summary Encodes a(n) BDCReportContentInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDCReportContentInformation, encoded as an ASN.1 Element.
 */
export
function _encode_BDCReportContentInformation (value: BDCReportContentInformation, elGetter: $.ASN1Encoder<BDCReportContentInformation>): _Element {
    if (!_cached_encoder_for_BDCReportContentInformation) { _cached_encoder_for_BDCReportContentInformation = function (value: BDCReportContentInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BdcPKCInformation(value.bdcPKCInformation, $.BER),
            /* REQUIRED   */ _encode_BPUReportInformation(value.bdcReportInformation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDCReportContentInformation(value, elGetter);
}


/* eslint-enable */
