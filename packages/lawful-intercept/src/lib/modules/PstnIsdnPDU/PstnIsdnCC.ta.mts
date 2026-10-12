/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SupplementaryInfo, _decode_SupplementaryInfo, _encode_SupplementaryInfo } from "../PstnIsdnPDU/SupplementaryInfo.ta.mjs";
// export { SupplementaryInfo, _decode_SupplementaryInfo, _encode_SupplementaryInfo } from "../PstnIsdnPDU/SupplementaryInfo.ta.mjs";


/**
 * @summary PstnIsdnCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PstnIsdnCC ::= SEQUENCE
 * {
 *     pstnIsdnCCObjId         [0] RELATIVE-OID,
 *     pstnIsdnCCContents      [1] OCTET STRING,
 *         -- See clause 6.2 for definition of format of PstnIsdn CC
 *     cCLinkID                [2] INTEGER (0..65535) OPTIONAL,
 *         -- Shall be present if multiple CCLinks are used (see clause 6.3.4)
 *     ...,
 *     supplementaryInfo       [3] SupplementaryInfo OPTIONAL
 *         -- Shall be present at least in the first PDU
 * }
 * ```
 * 
 * @class
 */
export
class PstnIsdnCC {
    /**
     * @summary `pstnIsdnCCObjId`.
     * @public
     * @readonly
     */
    readonly pstnIsdnCCObjId: RELATIVE_OID;
    /**
     * @summary `pstnIsdnCCContents`.
     * @public
     * @readonly
     */
    readonly pstnIsdnCCContents: OCTET_STRING;
    /**
     * @summary `cCLinkID`.
     * @public
     * @readonly
     */
    readonly cCLinkID: OPTIONAL<INTEGER>;
    /**
     * @summary `supplementaryInfo`.
     * @public
     * @readonly
     */
    readonly supplementaryInfo: OPTIONAL<SupplementaryInfo>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pstnIsdnCCObjId: RELATIVE_OID,
        pstnIsdnCCContents: OCTET_STRING,
        cCLinkID: OPTIONAL<INTEGER>,
        supplementaryInfo: OPTIONAL<SupplementaryInfo>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pstnIsdnCCObjId = pstnIsdnCCObjId;
        this.pstnIsdnCCContents = pstnIsdnCCContents;
        this.cCLinkID = cCLinkID;
        this.supplementaryInfo = supplementaryInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PstnIsdnCC
     * @description
     * 
     * This takes an `object` and converts it to a `PstnIsdnCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PstnIsdnCC`.
     * @returns {PstnIsdnCC}
     */
    public static _from_object (_o: { [_K in keyof (PstnIsdnCC)]: (PstnIsdnCC)[_K] }): PstnIsdnCC {
        return new PstnIsdnCC(_o.pstnIsdnCCObjId, _o.pstnIsdnCCContents, _o.cCLinkID, _o.supplementaryInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PstnIsdnCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PstnIsdnCC: $.ComponentSpec[] = [
    new $.ComponentSpec("pstnIsdnCCObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pstnIsdnCCContents", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCLinkID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PstnIsdnCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PstnIsdnCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PstnIsdnCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PstnIsdnCC: $.ComponentSpec[] = [
    new $.ComponentSpec("supplementaryInfo", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_PstnIsdnCC: $.ASN1Decoder<PstnIsdnCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PstnIsdnCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PstnIsdnCC (el: _Element): PstnIsdnCC {
    if (!_cached_decoder_for_PstnIsdnCC) { _cached_decoder_for_PstnIsdnCC = function (el: _Element): PstnIsdnCC {
    let pstnIsdnCCObjId!: RELATIVE_OID;
    let pstnIsdnCCContents!: OCTET_STRING;
    let cCLinkID: OPTIONAL<INTEGER>;
    let supplementaryInfo: OPTIONAL<SupplementaryInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pstnIsdnCCObjId": (_el: _Element): void => { pstnIsdnCCObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "pstnIsdnCCContents": (_el: _Element): void => { pstnIsdnCCContents = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cCLinkID": (_el: _Element): void => {
            cCLinkID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof cCLinkID === "bigint" ? cCLinkID : BigInt(cCLinkID);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PstnIsdnCC.cCLinkID violates INTEGER range");
            }
        },
        "supplementaryInfo": (_el: _Element): void => { supplementaryInfo = $._decode_implicit<SupplementaryInfo>(() => _decode_SupplementaryInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PstnIsdnCC,
        _extension_additions_list_spec_for_PstnIsdnCC,
        _root_component_type_list_2_spec_for_PstnIsdnCC,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PstnIsdnCC(
        pstnIsdnCCObjId,
        pstnIsdnCCContents,
        cCLinkID,
        supplementaryInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PstnIsdnCC(el);
}

let _cached_encoder_for_PstnIsdnCC: $.ASN1Encoder<PstnIsdnCC> | null = null;

/**
 * @summary Encodes a(n) PstnIsdnCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PstnIsdnCC, encoded as an ASN.1 Element.
 */
export
function _encode_PstnIsdnCC (value: PstnIsdnCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PstnIsdnCC) { _cached_encoder_for_PstnIsdnCC = function (value: PstnIsdnCC, elGetter: $.ASN1Encoder<PstnIsdnCC>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.pstnIsdnCCObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.pstnIsdnCCContents, $.BER);
    if (value.cCLinkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.cCLinkID, $.BER);
    }
    if (value.supplementaryInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SupplementaryInfo, $.BER)(value.supplementaryInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PstnIsdnCC(value, elGetter);
}


/* eslint-enable */
