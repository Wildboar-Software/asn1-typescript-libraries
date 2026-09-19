/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaCapabilities_ipaFeatures, _decode_IpaCapabilities_ipaFeatures, _encode_IpaCapabilities_ipaFeatures } from "../SGP32Definitions/IpaCapabilities-ipaFeatures.ta.mjs";
// export { IpaCapabilities_ipaFeatures, IpaCapabilities_ipaFeatures_directRspServerCommunication /* IMPORTED_LONG_NAMED_BIT */, directRspServerCommunication /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaFeatures_indirectRspServerCommunication /* IMPORTED_LONG_NAMED_BIT */, indirectRspServerCommunication /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaFeatures_eimDownloadDataHandling /* IMPORTED_LONG_NAMED_BIT */, eimDownloadDataHandling /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaFeatures_eimCtxParams1Generation /* IMPORTED_LONG_NAMED_BIT */, eimCtxParams1Generation /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaFeatures_eimProfileMetadataVerification /* IMPORTED_LONG_NAMED_BIT */, eimProfileMetadataVerification /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaFeatures_minimizeEsipaBytes /* IMPORTED_LONG_NAMED_BIT */, minimizeEsipaBytes /* IMPORTED_SHORT_NAMED_BIT */, _decode_IpaCapabilities_ipaFeatures, _encode_IpaCapabilities_ipaFeatures } from "../SGP32Definitions/IpaCapabilities-ipaFeatures.ta.mjs";
import { IpaCapabilities_ipaSupportedProtocols, _decode_IpaCapabilities_ipaSupportedProtocols, _encode_IpaCapabilities_ipaSupportedProtocols } from "../SGP32Definitions/IpaCapabilities-ipaSupportedProtocols.ta.mjs";
// export { IpaCapabilities_ipaSupportedProtocols, IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps /* IMPORTED_LONG_NAMED_BIT */, ipaRetrieveHttps /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps /* IMPORTED_LONG_NAMED_BIT */, ipaRetrieveCoaps /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps /* IMPORTED_LONG_NAMED_BIT */, ipaInjectHttps /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps /* IMPORTED_LONG_NAMED_BIT */, ipaInjectCoaps /* IMPORTED_SHORT_NAMED_BIT */, IpaCapabilities_ipaSupportedProtocols_ipaProprietary /* IMPORTED_LONG_NAMED_BIT */, ipaProprietary /* IMPORTED_SHORT_NAMED_BIT */, _decode_IpaCapabilities_ipaSupportedProtocols, _encode_IpaCapabilities_ipaSupportedProtocols } from "../SGP32Definitions/IpaCapabilities-ipaSupportedProtocols.ta.mjs";
import { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
// export { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";


/**
 * @summary IpaCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities ::= SEQUENCE {
 *     ipaFeatures [0] BIT STRING {
 *         directRspServerCommunication (0),
 *         indirectRspServerCommunication (1),
 *         eimDownloadDataHandling (2),
 *         eimCtxParams1Generation (3),
 *         eimProfileMetadataVerification (4),
 *         minimizeEsipaBytes (5)
 *     },
 *     ipaSupportedProtocols [1] BIT STRING {
 *         ipaRetrieveHttps(0),
 *         ipaRetrieveCoaps(1),
 *         ipaInjectHttps(2),
 *         ipaInjectCoaps(3),
 *         ipaProprietary(4)
 *     } OPTIONAL,
 *     eSipaProprietaryProtocolInformation [2] VendorSpecificExtension OPTIONAL -- Additional information for proprietary protocol(s)
 * 
 * }
 * ```
 * 
 * @class
 */
export
class IpaCapabilities {
    constructor (
        /**
         * @summary `ipaFeatures`.
         * @public
         * @readonly
         */
        readonly ipaFeatures: IpaCapabilities_ipaFeatures,
        /**
         * @summary `ipaSupportedProtocols`.
         * @public
         * @readonly
         */
        readonly ipaSupportedProtocols: OPTIONAL<IpaCapabilities_ipaSupportedProtocols>,
        /**
         * @summary `eSipaProprietaryProtocolInformation`.
         * @public
         * @readonly
         */
        readonly eSipaProprietaryProtocolInformation: OPTIONAL<VendorSpecificExtension>
    ) {}

    /**
     * @summary Restructures an object into a IpaCapabilities
     * @description
     * 
     * This takes an `object` and converts it to a `IpaCapabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaCapabilities`.
     * @returns {IpaCapabilities}
     */
    public static _from_object (_o: { [_K in keyof (IpaCapabilities)]: (IpaCapabilities)[_K] }): IpaCapabilities {
        return new IpaCapabilities(_o.ipaFeatures, _o.ipaSupportedProtocols, _o.eSipaProprietaryProtocolInformation);
    }


}

/**
 * @summary The Leading Root Component Types of IpaCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("ipaFeatures", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ipaSupportedProtocols", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eSipaProprietaryProtocolInformation", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IpaCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaCapabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaCapabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaCapabilities: $.ASN1Decoder<IpaCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaCapabilities (el: _Element): IpaCapabilities {
    if (!_cached_decoder_for_IpaCapabilities) { _cached_decoder_for_IpaCapabilities = function (el: _Element): IpaCapabilities {
    let ipaFeatures!: IpaCapabilities_ipaFeatures;
    let ipaSupportedProtocols: OPTIONAL<IpaCapabilities_ipaSupportedProtocols>;
    let eSipaProprietaryProtocolInformation: OPTIONAL<VendorSpecificExtension>;
    const callbacks: $.DecodingMap = {
        "ipaFeatures": (_el: _Element): void => { ipaFeatures = $._decode_implicit<IpaCapabilities_ipaFeatures>(() => _decode_IpaCapabilities_ipaFeatures)(_el); },
        "ipaSupportedProtocols": (_el: _Element): void => { ipaSupportedProtocols = $._decode_implicit<IpaCapabilities_ipaSupportedProtocols>(() => _decode_IpaCapabilities_ipaSupportedProtocols)(_el); },
        "eSipaProprietaryProtocolInformation": (_el: _Element): void => { eSipaProprietaryProtocolInformation = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IpaCapabilities,
        _extension_additions_list_spec_for_IpaCapabilities,
        _root_component_type_list_2_spec_for_IpaCapabilities,
        undefined,
    );
    return new IpaCapabilities(
        ipaFeatures,
        ipaSupportedProtocols,
        eSipaProprietaryProtocolInformation
    );
}; }
    return _cached_decoder_for_IpaCapabilities(el);
}

let _cached_encoder_for_IpaCapabilities: $.ASN1Encoder<IpaCapabilities> | null = null;

/**
 * @summary Encodes a(n) IpaCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_IpaCapabilities (value: IpaCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaCapabilities) { _cached_encoder_for_IpaCapabilities = function (value: IpaCapabilities, elGetter: $.ASN1Encoder<IpaCapabilities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IpaCapabilities_ipaFeatures, $.BER)(value.ipaFeatures, $.BER),
            /* IF_ABSENT  */ ((value.ipaSupportedProtocols === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IpaCapabilities_ipaSupportedProtocols, $.BER)(value.ipaSupportedProtocols, $.BER)),
            /* IF_ABSENT  */ ((value.eSipaProprietaryProtocolInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_VendorSpecificExtension, $.BER)(value.eSipaProprietaryProtocolInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IpaCapabilities(value, elGetter);
}


/* eslint-enable */
