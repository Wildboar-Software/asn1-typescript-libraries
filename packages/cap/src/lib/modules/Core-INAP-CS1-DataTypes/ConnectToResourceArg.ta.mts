/* eslint-disable */
import {
    OPTIONAL,
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
import { ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../Core-INAP-CS1-DataTypes/ConnectToResourceArg-resourceAddress.ta.mjs";
// export { ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../Core-INAP-CS1-DataTypes/ConnectToResourceArg-resourceAddress.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";


/**
 * @summary ConnectToResourceArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg ::= SEQUENCE {
 *      resourceAddress     CHOICE {
 *           ipRoutingAddress     [0] IPRoutingAddress,
 *           none     [3] NULL
 *           },
 *      extensions     [4] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL,
 *      serviceInteractionIndicators     [30] ServiceInteractionIndicators     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg {
    constructor (
        /**
         * @summary `resourceAddress`.
         * @public
         * @readonly
         */
        readonly resourceAddress: ConnectToResourceArg_resourceAddress,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `serviceInteractionIndicators`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>
    ) {}

    /**
     * @summary Restructures an object into a ConnectToResourceArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg`.
     * @returns {ConnectToResourceArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg)]: (ConnectToResourceArg)[_K] }): ConnectToResourceArg {
        return new ConnectToResourceArg(_o.resourceAddress, _o.extensions, _o.serviceInteractionIndicators);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceAddress", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg: $.ASN1Decoder<ConnectToResourceArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg (el: _Element): ConnectToResourceArg {
    if (!_cached_decoder_for_ConnectToResourceArg) { _cached_decoder_for_ConnectToResourceArg = function (el: _Element): ConnectToResourceArg {
    let resourceAddress!: ConnectToResourceArg_resourceAddress;
    let extensions: OPTIONAL<ExtensionField[]>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    const callbacks: $.DecodingMap = {
        "resourceAddress": (_el: _Element): void => { resourceAddress = _decode_ConnectToResourceArg_resourceAddress(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectToResourceArg,
        _extension_additions_list_spec_for_ConnectToResourceArg,
        _root_component_type_list_2_spec_for_ConnectToResourceArg,
        undefined,
    );
    return new ConnectToResourceArg(
        resourceAddress,
        extensions,
        serviceInteractionIndicators
    );
}; }
    return _cached_decoder_for_ConnectToResourceArg(el);
}

let _cached_encoder_for_ConnectToResourceArg: $.ASN1Encoder<ConnectToResourceArg> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg (value: ConnectToResourceArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg) { _cached_encoder_for_ConnectToResourceArg = function (value: ConnectToResourceArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectToResourceArg_resourceAddress(value.resourceAddress, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg(value, elGetter);
}


/* eslint-enable */
