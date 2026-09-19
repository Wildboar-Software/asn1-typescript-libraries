/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration } from "../SGP32Definitions/ISDRProprietaryApplicationTemplateIoT-euiccConfiguration.ta.mjs";
// export { ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported /* IMPORTED_LONG_NAMED_BIT */, ipaeSupported /* IMPORTED_SHORT_NAMED_BIT */, ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile /* IMPORTED_LONG_NAMED_BIT */, enabledProfile /* IMPORTED_SHORT_NAMED_BIT */, _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration } from "../SGP32Definitions/ISDRProprietaryApplicationTemplateIoT-euiccConfiguration.ta.mjs";


/**
 * @summary ISDRProprietaryApplicationTemplateIoT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplateIoT ::= [PRIVATE 1] SEQUENCE { -- Tag 'E1' 
 *     euiccConfiguration BIT STRING {
 *         ipaeSupported(0), -- IPA in the eUICC (IPAe) supported
 *         enabledProfile(1) -- eUICC contains an Enabled Profile
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ISDRProprietaryApplicationTemplateIoT {
    constructor (
        /**
         * @summary `euiccConfiguration`.
         * @public
         * @readonly
         */
        readonly euiccConfiguration: ISDRProprietaryApplicationTemplateIoT_euiccConfiguration
    ) {}

    /**
     * @summary Restructures an object into a ISDRProprietaryApplicationTemplateIoT
     * @description
     * 
     * This takes an `object` and converts it to a `ISDRProprietaryApplicationTemplateIoT`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISDRProprietaryApplicationTemplateIoT`.
     * @returns {ISDRProprietaryApplicationTemplateIoT}
     */
    public static _from_object (_o: { [_K in keyof (ISDRProprietaryApplicationTemplateIoT)]: (ISDRProprietaryApplicationTemplateIoT)[_K] }): ISDRProprietaryApplicationTemplateIoT {
        return new ISDRProprietaryApplicationTemplateIoT(_o.euiccConfiguration);
    }


}

/**
 * @summary The Leading Root Component Types of ISDRProprietaryApplicationTemplateIoT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISDRProprietaryApplicationTemplateIoT: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccConfiguration", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ISDRProprietaryApplicationTemplateIoT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISDRProprietaryApplicationTemplateIoT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISDRProprietaryApplicationTemplateIoT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISDRProprietaryApplicationTemplateIoT: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT: $.ASN1Decoder<ISDRProprietaryApplicationTemplateIoT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDRProprietaryApplicationTemplateIoT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDRProprietaryApplicationTemplateIoT (el: _Element): ISDRProprietaryApplicationTemplateIoT {
    if (!_cached_decoder_for_ISDRProprietaryApplicationTemplateIoT) { _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT = $._decode_implicit<ISDRProprietaryApplicationTemplateIoT>(() => function (el: _Element): ISDRProprietaryApplicationTemplateIoT {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ISDRProprietaryApplicationTemplateIoT contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccConfiguration";
    let euiccConfiguration!: ISDRProprietaryApplicationTemplateIoT_euiccConfiguration;
    euiccConfiguration = _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration(sequence[0]);
    return new ISDRProprietaryApplicationTemplateIoT(
        euiccConfiguration,

    );
}); }
    return _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT(el);
}

let _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT: $.ASN1Encoder<ISDRProprietaryApplicationTemplateIoT> | null = null;

/**
 * @summary Encodes a(n) ISDRProprietaryApplicationTemplateIoT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDRProprietaryApplicationTemplateIoT, encoded as an ASN.1 Element.
 */
export
function _encode_ISDRProprietaryApplicationTemplateIoT (value: ISDRProprietaryApplicationTemplateIoT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDRProprietaryApplicationTemplateIoT) { _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT = $._encode_implicit(_TagClass.private, 1, () => function (value: ISDRProprietaryApplicationTemplateIoT, elGetter: $.ASN1Encoder<ISDRProprietaryApplicationTemplateIoT>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration(value.euiccConfiguration, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT(value, elGetter);
}


/* eslint-enable */
