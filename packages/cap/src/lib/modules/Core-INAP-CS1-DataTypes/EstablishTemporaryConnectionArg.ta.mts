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
import { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../Core-INAP-CS1-DataTypes/AssistingSSPIPRoutingAddress.ta.mjs";
// export { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../Core-INAP-CS1-DataTypes/AssistingSSPIPRoutingAddress.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../Core-INAP-CS1-DataTypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../Core-INAP-CS1-DataTypes/ScfID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";


/**
 * @summary EstablishTemporaryConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg ::= SEQUENCE {
 *      assistingSSPIPRoutingAddress     [0] AssistingSSPIPRoutingAddress,
 *      correlationID     [1] CorrelationID     OPTIONAL,
 *      scfID     [3] ScfID     OPTIONAL,
 *      extensions     [4] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL,
 *      serviceInteractionIndicators     [30] ServiceInteractionIndicators     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class EstablishTemporaryConnectionArg {
    constructor (
        /**
         * @summary `assistingSSPIPRoutingAddress`.
         * @public
         * @readonly
         */
        readonly assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `scfID`.
         * @public
         * @readonly
         */
        readonly scfID: OPTIONAL<ScfID>,
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
     * @summary Restructures an object into a EstablishTemporaryConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishTemporaryConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishTemporaryConnectionArg`.
     * @returns {EstablishTemporaryConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (EstablishTemporaryConnectionArg)]: (EstablishTemporaryConnectionArg)[_K] }): EstablishTemporaryConnectionArg {
        return new EstablishTemporaryConnectionArg(_o.assistingSSPIPRoutingAddress, _o.correlationID, _o.scfID, _o.extensions, _o.serviceInteractionIndicators);
    }


}

/**
 * @summary The Leading Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("assistingSSPIPRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EstablishTemporaryConnectionArg: $.ASN1Decoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishTemporaryConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishTemporaryConnectionArg (el: _Element): EstablishTemporaryConnectionArg {
    if (!_cached_decoder_for_EstablishTemporaryConnectionArg) { _cached_decoder_for_EstablishTemporaryConnectionArg = function (el: _Element): EstablishTemporaryConnectionArg {
    let assistingSSPIPRoutingAddress!: AssistingSSPIPRoutingAddress;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    const callbacks: $.DecodingMap = {
        "assistingSSPIPRoutingAddress": (_el: _Element): void => { assistingSSPIPRoutingAddress = $._decode_implicit<AssistingSSPIPRoutingAddress>(() => _decode_AssistingSSPIPRoutingAddress)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg,
        _extension_additions_list_spec_for_EstablishTemporaryConnectionArg,
        _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg,
        undefined,
    );
    return new EstablishTemporaryConnectionArg(
        assistingSSPIPRoutingAddress,
        correlationID,
        scfID,
        extensions,
        serviceInteractionIndicators
    );
}; }
    return _cached_decoder_for_EstablishTemporaryConnectionArg(el);
}

let _cached_encoder_for_EstablishTemporaryConnectionArg: $.ASN1Encoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Encodes a(n) EstablishTemporaryConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishTemporaryConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishTemporaryConnectionArg (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishTemporaryConnectionArg) { _cached_encoder_for_EstablishTemporaryConnectionArg = function (value: EstablishTemporaryConnectionArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistingSSPIPRoutingAddress, $.BER)(value.assistingSSPIPRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.scfID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ScfID, $.BER)(value.scfID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EstablishTemporaryConnectionArg(value, elGetter);
}


/* eslint-enable */
