/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { FlowDescription, _decode_FlowDescription, _encode_FlowDescription } from "../TS33128Payloads/FlowDescription.ta.mjs";
// export { FlowDescription, _decode_FlowDescription, _encode_FlowDescription } from "../TS33128Payloads/FlowDescription.ta.mjs";
import { FDir, _decode_FDir, _encode_FDir, _enum_for_FDir } from "../TS33128Payloads/FDir.ta.mjs";
// export { FDir, _enum_for_FDir, FDir_downlink /* IMPORTED_LONG_ENUMERATION_ITEM */, downlink /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FDir, _encode_FDir } from "../TS33128Payloads/FDir.ta.mjs";
import { VLANTag, _decode_VLANTag, _encode_VLANTag } from "../TS33128Payloads/VLANTag.ta.mjs";
// export { VLANTag, _decode_VLANTag, _encode_VLANTag } from "../TS33128Payloads/VLANTag.ta.mjs";


/**
 * @summary EthFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EthFlowDescription ::= SEQUENCE
 * {
 *     destMacAddress    [1] MACAddress OPTIONAL,
 *     ethType           [2] OCTET STRING (SIZE(2)),
 *     fDesc             [3] FlowDescription OPTIONAL,
 *     fDir              [4] FDir OPTIONAL,
 *     sourceMacAddress  [5] MACAddress OPTIONAL,
 *     vlanTags          [6] SET OF VLANTag,
 *     srcMacAddrEnd     [7] MACAddress OPTIONAL,
 *     destMacAddrEnd    [8] MACAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EthFlowDescription {
    /**
     * @summary `destMacAddress`.
     * @public
     * @readonly
     */
    readonly destMacAddress: OPTIONAL<MACAddress>;
    /**
     * @summary `ethType`.
     * @public
     * @readonly
     */
    readonly ethType: OCTET_STRING;
    /**
     * @summary `fDesc`.
     * @public
     * @readonly
     */
    readonly fDesc: OPTIONAL<FlowDescription>;
    /**
     * @summary `fDir`.
     * @public
     * @readonly
     */
    readonly fDir: OPTIONAL<FDir>;
    /**
     * @summary `sourceMacAddress`.
     * @public
     * @readonly
     */
    readonly sourceMacAddress: OPTIONAL<MACAddress>;
    /**
     * @summary `vlanTags`.
     * @public
     * @readonly
     */
    readonly vlanTags: VLANTag[];
    /**
     * @summary `srcMacAddrEnd`.
     * @public
     * @readonly
     */
    readonly srcMacAddrEnd: OPTIONAL<MACAddress>;
    /**
     * @summary `destMacAddrEnd`.
     * @public
     * @readonly
     */
    readonly destMacAddrEnd: OPTIONAL<MACAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destMacAddress: OPTIONAL<MACAddress>,
        ethType: OCTET_STRING,
        fDesc: OPTIONAL<FlowDescription>,
        fDir: OPTIONAL<FDir>,
        sourceMacAddress: OPTIONAL<MACAddress>,
        vlanTags: VLANTag[],
        srcMacAddrEnd?: OPTIONAL<MACAddress>,
        destMacAddrEnd?: OPTIONAL<MACAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destMacAddress = destMacAddress;
        this.ethType = ethType;
        this.fDesc = fDesc;
        this.fDir = fDir;
        this.sourceMacAddress = sourceMacAddress;
        this.vlanTags = vlanTags;
        this.srcMacAddrEnd = srcMacAddrEnd;
        this.destMacAddrEnd = destMacAddrEnd;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EthFlowDescription
     * @description
     * 
     * This takes an `object` and converts it to a `EthFlowDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EthFlowDescription`.
     * @returns {EthFlowDescription}
     */
    public static _from_object (_o: { [_K in keyof (EthFlowDescription)]: (EthFlowDescription)[_K] }): EthFlowDescription {
        return new EthFlowDescription(_o.destMacAddress, _o.ethType, _o.fDesc, _o.fDir, _o.sourceMacAddress, _o.vlanTags, _o.srcMacAddrEnd, _o.destMacAddrEnd, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `fDir`
         * @public
         * @static
         */

    public static _enum_for_fDir = _enum_for_FDir;
}

/**
 * @summary The Leading Root Component Types of EthFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EthFlowDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("destMacAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ethType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fDesc", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fDir", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sourceMacAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("vlanTags", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("srcMacAddrEnd", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("destMacAddrEnd", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EthFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EthFlowDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EthFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EthFlowDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EthFlowDescription: $.ASN1Decoder<EthFlowDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EthFlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EthFlowDescription (el: _Element): EthFlowDescription {
    if (!_cached_decoder_for_EthFlowDescription) { _cached_decoder_for_EthFlowDescription = function (el: _Element): EthFlowDescription {
    let destMacAddress: OPTIONAL<MACAddress>;
    let ethType!: OCTET_STRING;
    let fDesc: OPTIONAL<FlowDescription>;
    let fDir: OPTIONAL<FDir>;
    let sourceMacAddress: OPTIONAL<MACAddress>;
    let vlanTags!: VLANTag[];
    let srcMacAddrEnd: OPTIONAL<MACAddress>;
    let destMacAddrEnd: OPTIONAL<MACAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destMacAddress": (_el: _Element): void => { destMacAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "ethType": (_el: _Element): void => {
            ethType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (ethType.length < 2 || ethType.length > 2) {
                throw new ASN1SizeError("EthFlowDescription.ethType violates SIZE constraint");
            }
        },
        "fDesc": (_el: _Element): void => { fDesc = $._decode_implicit<FlowDescription>(() => _decode_FlowDescription)(_el); },
        "fDir": (_el: _Element): void => { fDir = $._decode_implicit<FDir>(() => _decode_FDir)(_el); },
        "sourceMacAddress": (_el: _Element): void => { sourceMacAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "vlanTags": (_el: _Element): void => { vlanTags = $._decode_implicit<VLANTag[]>(() => $._decodeSetOf<VLANTag>(() => _decode_VLANTag))(_el); },
        "srcMacAddrEnd": (_el: _Element): void => { srcMacAddrEnd = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "destMacAddrEnd": (_el: _Element): void => { destMacAddrEnd = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EthFlowDescription,
        _extension_additions_list_spec_for_EthFlowDescription,
        _root_component_type_list_2_spec_for_EthFlowDescription,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EthFlowDescription(
        destMacAddress,
        ethType,
        fDesc,
        fDir,
        sourceMacAddress,
        vlanTags,
        srcMacAddrEnd,
        destMacAddrEnd,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EthFlowDescription(el);
}

let _cached_encoder_for_EthFlowDescription: $.ASN1Encoder<EthFlowDescription> | null = null;

/**
 * @summary Encodes a(n) EthFlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EthFlowDescription, encoded as an ASN.1 Element.
 */
export
function _encode_EthFlowDescription (value: EthFlowDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EthFlowDescription) { _cached_encoder_for_EthFlowDescription = function (value: EthFlowDescription, elGetter: $.ASN1Encoder<EthFlowDescription>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.destMacAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MACAddress, $.BER)(value.destMacAddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.ethType, $.BER);
    if (value.fDesc !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_FlowDescription, $.BER)(value.fDesc, $.BER);
    }
    if (value.fDir !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FDir, $.BER)(value.fDir, $.BER);
    }
    if (value.sourceMacAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MACAddress, $.BER)(value.sourceMacAddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<VLANTag>(() => _encode_VLANTag, $.BER), $.BER)(value.vlanTags, $.BER);
    if (value.srcMacAddrEnd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MACAddress, $.BER)(value.srcMacAddrEnd, $.BER);
    }
    if (value.destMacAddrEnd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MACAddress, $.BER)(value.destMacAddrEnd, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EthFlowDescription(value, elGetter);
}


/* eslint-enable */
