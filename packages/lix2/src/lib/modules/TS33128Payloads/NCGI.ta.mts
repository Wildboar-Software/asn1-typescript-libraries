/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NRCellID, _decode_NRCellID, _encode_NRCellID } from "../TS33128Payloads/NRCellID.ta.mjs";
// export { NRCellID, _decode_NRCellID, _encode_NRCellID } from "../TS33128Payloads/NRCellID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary NCGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCGI ::= SEQUENCE
 * {
 *     pLMNID                      [1] PLMNID,
 *     nRCellID                    [2] NRCellID,
 *     nID                         [3] NID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NCGI {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `nRCellID`.
         * @public
         * @readonly
         */
        readonly nRCellID: NRCellID,
        /**
         * @summary `nID`.
         * @public
         * @readonly
         */
        readonly nID: OPTIONAL<NID>
    ) {}

    /**
     * @summary Restructures an object into a NCGI
     * @description
     * 
     * This takes an `object` and converts it to a `NCGI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NCGI`.
     * @returns {NCGI}
     */
    public static _from_object (_o: { [_K in keyof (NCGI)]: (NCGI)[_K] }): NCGI {
        return new NCGI(_o.pLMNID, _o.nRCellID, _o.nID);
    }


}

/**
 * @summary The Leading Root Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NCGI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nRCellID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NCGI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NCGI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NCGI: $.ASN1Decoder<NCGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NCGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NCGI (el: _Element): NCGI {
    if (!_cached_decoder_for_NCGI) { _cached_decoder_for_NCGI = function (el: _Element): NCGI {
    let pLMNID!: PLMNID;
    let nRCellID!: NRCellID;
    let nID: OPTIONAL<NID>;
    const callbacks: $.DecodingMap = {
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nRCellID": (_el: _Element): void => { nRCellID = $._decode_implicit<NRCellID>(() => _decode_NRCellID)(_el); },
        "nID": (_el: _Element): void => { nID = $._decode_implicit<NID>(() => _decode_NID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NCGI,
        _extension_additions_list_spec_for_NCGI,
        _root_component_type_list_2_spec_for_NCGI,
        undefined,
    );
    return new NCGI(
        pLMNID,
        nRCellID,
        nID
    );
}; }
    return _cached_decoder_for_NCGI(el);
}

let _cached_encoder_for_NCGI: $.ASN1Encoder<NCGI> | null = null;

/**
 * @summary Encodes a(n) NCGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCGI, encoded as an ASN.1 Element.
 */
export
function _encode_NCGI (value: NCGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NCGI) { _cached_encoder_for_NCGI = function (value: NCGI, elGetter: $.ASN1Encoder<NCGI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NRCellID, $.BER)(value.nRCellID, $.BER),
            /* IF_ABSENT  */ ((value.nID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NID, $.BER)(value.nID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NCGI(value, elGetter);
}


/* eslint-enable */
