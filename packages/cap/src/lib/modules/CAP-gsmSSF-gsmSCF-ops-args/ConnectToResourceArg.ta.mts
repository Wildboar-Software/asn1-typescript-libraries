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
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../CAP-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../CAP-gsmSSF-gsmSCF-ops-args/ConnectToResourceArg-resourceAddress.ta.mjs";
// export { ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../CAP-gsmSSF-gsmSCF-ops-args/ConnectToResourceArg-resourceAddress.ta.mjs";


/**
 * @summary ConnectToResourceArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     resourceAddress    CHOICE {
 *     ipRoutingAddress            [0] IPRoutingAddress {bound},
 *     none                [3] NULL
 *     },
 *     extensions                [4] Extensions {bound}            OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [7] ServiceInteractionIndicatorsTwo        OPTIONAL,
 *     callSegmentID            [50] CallSegmentID {bound}            OPTIONAL,
 *     ...
 *     }
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
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `callSegmentID`.
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
        return new ConnectToResourceArg(_o.resourceAddress, _o.extensions, _o.serviceInteractionIndicatorsTwo, _o.callSegmentID, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 50))
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
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceAddress": (_el: _Element): void => { resourceAddress = _decode_ConnectToResourceArg_resourceAddress(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectToResourceArg,
        _extension_additions_list_spec_for_ConnectToResourceArg,
        _root_component_type_list_2_spec_for_ConnectToResourceArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectToResourceArg(
        resourceAddress,
        extensions,
        serviceInteractionIndicatorsTwo,
        callSegmentID,
        _unrecognizedExtensionsList
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
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg(value, elGetter);
}


/* eslint-enable */
