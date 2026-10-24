/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { EUTRACellID, _decode_EUTRACellID, _encode_EUTRACellID } from "../TS33128Payloads/EUTRACellID.ta.mjs";
// export { EUTRACellID, _decode_EUTRACellID, _encode_EUTRACellID } from "../TS33128Payloads/EUTRACellID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary ECGI
 * @description
 * 
 * The ECGI type is used to report the E-UTRA Cell Identity. The ECGI type is
 * derived from the data present in the ECGI type defined in TS 29.571 [17]
 * clause 5.4.4.5.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.24.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECGI ::= SEQUENCE
 * {
 *     pLMNID                      [1] PLMNID,
 *     eUTRACellID                 [2] EUTRACellID,
 *     nID                         [3] NID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ECGI {
    /**
     * @summary `pLMNID`.
     * @description
     *
     * The PLMN Identity of the cell being reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.24.
     *
     * @public
     * @readonly
     */
    readonly pLMNID: PLMNID;
    /**
     * @summary `eUTRACellID`.
     * @description
     *
     * The E-UTRA Cell Identity for the cell being reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.24.
     *
     * @public
     * @readonly
     */
    readonly eUTRACellID: EUTRACellID;
    /**
     * @summary `nID`.
     * @description
     *
     * Network Identifier of the cell being reported. Shall be present if the
     * cell being reported belongs to an SNPN.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.24.
     *
     * @public
     * @readonly
     */
    readonly nID: OPTIONAL<NID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pLMNID: PLMNID,
        eUTRACellID: EUTRACellID,
        nID?: OPTIONAL<NID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pLMNID = pLMNID;
        this.eUTRACellID = eUTRACellID;
        this.nID = nID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ECGI
     * @description
     * 
     * This takes an `object` and converts it to a `ECGI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECGI`.
     * @returns {ECGI}
     */
    public static _from_object (_o: { [_K in keyof (ECGI)]: (ECGI)[_K] }): ECGI {
        return new ECGI(_o.pLMNID, _o.eUTRACellID, _o.nID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ECGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECGI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eUTRACellID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ECGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECGI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ECGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECGI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ECGI: $.ASN1Decoder<ECGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ECGI (el: _Element): ECGI {
    if (!_cached_decoder_for_ECGI) { _cached_decoder_for_ECGI = function (el: _Element): ECGI {
    let pLMNID!: PLMNID;
    let eUTRACellID!: EUTRACellID;
    let nID: OPTIONAL<NID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "eUTRACellID": (_el: _Element): void => { eUTRACellID = $._decode_implicit<EUTRACellID>(() => _decode_EUTRACellID)(_el); },
        "nID": (_el: _Element): void => { nID = $._decode_implicit<NID>(() => _decode_NID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECGI,
        _extension_additions_list_spec_for_ECGI,
        _root_component_type_list_2_spec_for_ECGI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ECGI(
        pLMNID,
        eUTRACellID,
        nID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ECGI(el);
}

let _cached_encoder_for_ECGI: $.ASN1Encoder<ECGI> | null = null;

/**
 * @summary Encodes a(n) ECGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECGI, encoded as an ASN.1 Element.
 */
export
function _encode_ECGI (value: ECGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ECGI) { _cached_encoder_for_ECGI = function (value: ECGI, elGetter: $.ASN1Encoder<ECGI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EUTRACellID, $.BER)(value.eUTRACellID, $.BER);
    if (value.nID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NID, $.BER)(value.nID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ECGI(value, elGetter);
}


/* eslint-enable */
