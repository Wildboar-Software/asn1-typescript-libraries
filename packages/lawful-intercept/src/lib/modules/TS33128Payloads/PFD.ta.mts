/* eslint-disable */
import {
    type UTF8String,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PFDFlowDescriptions, _decode_PFDFlowDescriptions, _encode_PFDFlowDescriptions } from "../TS33128Payloads/PFDFlowDescriptions.ta.mjs";
// export { PFDFlowDescriptions, _decode_PFDFlowDescriptions, _encode_PFDFlowDescriptions } from "../TS33128Payloads/PFDFlowDescriptions.ta.mjs";
import { PFDURLs, _decode_PFDURLs, _encode_PFDURLs } from "../TS33128Payloads/PFDURLs.ta.mjs";
// export { PFDURLs, _decode_PFDURLs, _encode_PFDURLs } from "../TS33128Payloads/PFDURLs.ta.mjs";
import { DomainNames, _decode_DomainNames, _encode_DomainNames } from "../TS33128Payloads/DomainNames.ta.mjs";
// export { DomainNames, _decode_DomainNames, _encode_DomainNames } from "../TS33128Payloads/DomainNames.ta.mjs";
import { DnProtocol, _decode_DnProtocol, _encode_DnProtocol, _enum_for_DnProtocol } from "../TS33128Payloads/DnProtocol.ta.mjs";
// export { DnProtocol, _enum_for_DnProtocol, DnProtocol_dnsQname /* IMPORTED_LONG_ENUMERATION_ITEM */, dnsQname /* IMPORTED_SHORT_ENUMERATION_ITEM */, DnProtocol_tlsSni /* IMPORTED_LONG_ENUMERATION_ITEM */, tlsSni /* IMPORTED_SHORT_ENUMERATION_ITEM */, DnProtocol_tlsSan /* IMPORTED_LONG_ENUMERATION_ITEM */, tlsSan /* IMPORTED_SHORT_ENUMERATION_ITEM */, DnProtocol_tlsScn /* IMPORTED_LONG_ENUMERATION_ITEM */, tlsScn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DnProtocol, _encode_DnProtocol } from "../TS33128Payloads/DnProtocol.ta.mjs";


/**
 * @summary PFD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFD ::= SEQUENCE
 * {
 *     pFDId                [1] UTF8String,
 *     pFDFlowDescriptions  [2] PFDFlowDescriptions,
 *     urls                 [3] PFDURLs,
 *     domainNames          [4] DomainNames,
 *     dnProtocol           [5] DnProtocol
 * }
 * ```
 * 
 * @class
 */
export
class PFD {
    /**
     * @summary `pFDId`.
     * @public
     * @readonly
     */
    readonly pFDId: UTF8String;
    /**
     * @summary `pFDFlowDescriptions`.
     * @public
     * @readonly
     */
    readonly pFDFlowDescriptions: PFDFlowDescriptions;
    /**
     * @summary `urls`.
     * @public
     * @readonly
     */
    readonly urls: PFDURLs;
    /**
     * @summary `domainNames`.
     * @public
     * @readonly
     */
    readonly domainNames: DomainNames;
    /**
     * @summary `dnProtocol`.
     * @public
     * @readonly
     */
    readonly dnProtocol: DnProtocol;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pFDId: UTF8String,
        pFDFlowDescriptions: PFDFlowDescriptions,
        urls: PFDURLs,
        domainNames: DomainNames,
        dnProtocol: DnProtocol,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pFDId = pFDId;
        this.pFDFlowDescriptions = pFDFlowDescriptions;
        this.urls = urls;
        this.domainNames = domainNames;
        this.dnProtocol = dnProtocol;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PFD
     * @description
     * 
     * This takes an `object` and converts it to a `PFD`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFD`.
     * @returns {PFD}
     */
    public static _from_object (_o: { [_K in keyof (PFD)]: (PFD)[_K] }): PFD {
        return new PFD(_o.pFDId, _o.pFDFlowDescriptions, _o.urls, _o.domainNames, _o.dnProtocol, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `dnProtocol`
         * @public
         * @static
         */

    public static _enum_for_dnProtocol = _enum_for_DnProtocol;
}

/**
 * @summary The Leading Root Component Types of PFD
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFD: $.ComponentSpec[] = [
    new $.ComponentSpec("pFDId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pFDFlowDescriptions", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("urls", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("domainNames", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dnProtocol", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PFD
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFD: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFD
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFD: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFD: $.ASN1Decoder<PFD> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFD
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFD (el: _Element): PFD {
    if (!_cached_decoder_for_PFD) { _cached_decoder_for_PFD = function (el: _Element): PFD {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("PFD contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pFDId";
    sequence[1].name = "pFDFlowDescriptions";
    sequence[2].name = "urls";
    sequence[3].name = "domainNames";
    sequence[4].name = "dnProtocol";
    let pFDId!: UTF8String;
    let pFDFlowDescriptions!: PFDFlowDescriptions;
    let urls!: PFDURLs;
    let domainNames!: DomainNames;
    let dnProtocol!: DnProtocol;
    pFDId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    pFDFlowDescriptions = $._decode_implicit<PFDFlowDescriptions>(() => _decode_PFDFlowDescriptions)(sequence[1]);
    urls = $._decode_implicit<PFDURLs>(() => _decode_PFDURLs)(sequence[2]);
    domainNames = $._decode_implicit<DomainNames>(() => _decode_DomainNames)(sequence[3]);
    dnProtocol = $._decode_implicit<DnProtocol>(() => _decode_DnProtocol)(sequence[4]);
    return new PFD(
        pFDId,
        pFDFlowDescriptions,
        urls,
        domainNames,
        dnProtocol,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_PFD(el);
}

let _cached_encoder_for_PFD: $.ASN1Encoder<PFD> | null = null;

/**
 * @summary Encodes a(n) PFD into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFD, encoded as an ASN.1 Element.
 */
export
function _encode_PFD (value: PFD, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFD) { _cached_encoder_for_PFD = function (value: PFD, elGetter: $.ASN1Encoder<PFD>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.pFDId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PFDFlowDescriptions, $.BER)(value.pFDFlowDescriptions, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PFDURLs, $.BER)(value.urls, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DomainNames, $.BER)(value.domainNames, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_DnProtocol, $.BER)(value.dnProtocol, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PFD(value, elGetter);
}


/* eslint-enable */
