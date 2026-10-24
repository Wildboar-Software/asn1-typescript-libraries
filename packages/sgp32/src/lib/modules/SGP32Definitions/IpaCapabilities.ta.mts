/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaCapabilities_ipaFeatures, _decode_IpaCapabilities_ipaFeatures, _encode_IpaCapabilities_ipaFeatures } from "../SGP32Definitions/IpaCapabilities-ipaFeatures.ta.mjs";
import { IpaCapabilities_ipaSupportedProtocols, _decode_IpaCapabilities_ipaSupportedProtocols, _encode_IpaCapabilities_ipaSupportedProtocols } from "../SGP32Definitions/IpaCapabilities-ipaSupportedProtocols.ta.mjs";
import { type VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary IpaCapabilities
 * @description
 * 
 * The eIM uses this to decide whether it can support Profile download and
 * Profile management for this IPA, including the functional split and the use
 * of compact ESipa objects. It MAY be obtained out of band from the IoT Device
 * owner, or by requesting tag `'A8'` in an eIM Package. SGP.32 v1.2, section
 * 4.1.
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
    /**
     * @summary `ipaFeatures`.
     * @description
     * Required. Each bit set to 1 is a Profile-download or compact-ESipa feature
     * this IPA supports. SGP.32 v1.2, section 4.1.
     * @public
     * @readonly
     */
    public readonly ipaFeatures: IpaCapabilities_ipaFeatures;
    /**
     * @summary `ipaSupportedProtocols`.
     * @description
     * Present when the IPA advertises eIM Package transfer. Each bit set to 1 is a
     * supported retrieval or injection transport. SGP.32 v1.2, section 4.1.
     * @public
     * @readonly
     */
    public readonly ipaSupportedProtocols?: OPTIONAL<IpaCapabilities_ipaSupportedProtocols>;
    /**
     * @summary `eSipaProprietaryProtocolInformation`.
     * @description
     * SGP.32 v1.2 section 4.1 does not define this component. Annex C does not
     * further define it.
     * @public
     * @readonly
     */
    public readonly eSipaProprietaryProtocolInformation?: OPTIONAL<VendorSpecificExtension>;

    constructor (
        ipaFeatures: IpaCapabilities_ipaFeatures,
        ipaSupportedProtocols?: OPTIONAL<IpaCapabilities_ipaSupportedProtocols>,
        eSipaProprietaryProtocolInformation?: OPTIONAL<VendorSpecificExtension>
    ) {
        this.ipaFeatures = ipaFeatures;
        this.ipaSupportedProtocols = ipaSupportedProtocols;
        this.eSipaProprietaryProtocolInformation = eSipaProprietaryProtocolInformation;
    }

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
    if (!_cached_encoder_for_IpaCapabilities) { _cached_encoder_for_IpaCapabilities = function (value: IpaCapabilities): _Element {
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
