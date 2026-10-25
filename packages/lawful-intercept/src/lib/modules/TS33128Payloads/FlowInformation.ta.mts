/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FlowDescription, _decode_FlowDescription, _encode_FlowDescription } from "../TS33128Payloads/FlowDescription.ta.mjs";
// export { FlowDescription, _decode_FlowDescription, _encode_FlowDescription } from "../TS33128Payloads/FlowDescription.ta.mjs";
import { EthFlowDescription, _decode_EthFlowDescription, _encode_EthFlowDescription } from "../TS33128Payloads/EthFlowDescription.ta.mjs";
// export { EthFlowDescription, _decode_EthFlowDescription, _encode_EthFlowDescription } from "../TS33128Payloads/EthFlowDescription.ta.mjs";
import { FlowDirection, _decode_FlowDirection, _encode_FlowDirection, _enum_for_FlowDirection } from "../TS33128Payloads/FlowDirection.ta.mjs";
// export { FlowDirection, _enum_for_FlowDirection, FlowDirection_downlinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, downlinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_uplinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, uplinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_dowlinkAndUplink /* IMPORTED_LONG_ENUMERATION_ITEM */, dowlinkAndUplink /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FlowDirection, _encode_FlowDirection } from "../TS33128Payloads/FlowDirection.ta.mjs";


/**
 * @summary FlowInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowInformation ::= SEQUENCE
 * {
 *     flowDescription    [1] FlowDescription OPTIONAL,
 *     ethFlowDescription [2] EthFlowDescription OPTIONAL,
 *     tosTrafficClass    [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *     spi                [4] OCTET STRING (SIZE(4)) OPTIONAL,
 *     flowLabel          [5] OCTET STRING (SIZE(3)) OPTIONAL,
 *     flowDirection      [6] FlowDirection OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FlowInformation {
    /**
     * @summary `flowDescription`.
     * @public
     * @readonly
     */
    readonly flowDescription: OPTIONAL<FlowDescription>;
    /**
     * @summary `ethFlowDescription`.
     * @public
     * @readonly
     */
    readonly ethFlowDescription: OPTIONAL<EthFlowDescription>;
    /**
     * @summary `tosTrafficClass`.
     * @public
     * @readonly
     */
    readonly tosTrafficClass: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `spi`.
     * @public
     * @readonly
     */
    readonly spi: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `flowLabel`.
     * @public
     * @readonly
     */
    readonly flowLabel: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `flowDirection`.
     * @public
     * @readonly
     */
    readonly flowDirection: OPTIONAL<FlowDirection>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        flowDescription?: OPTIONAL<FlowDescription>,
        ethFlowDescription?: OPTIONAL<EthFlowDescription>,
        tosTrafficClass?: OPTIONAL<OCTET_STRING>,
        spi?: OPTIONAL<OCTET_STRING>,
        flowLabel?: OPTIONAL<OCTET_STRING>,
        flowDirection?: OPTIONAL<FlowDirection>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.flowDescription = flowDescription;
        this.ethFlowDescription = ethFlowDescription;
        this.tosTrafficClass = tosTrafficClass;
        this.spi = spi;
        this.flowLabel = flowLabel;
        this.flowDirection = flowDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FlowInformation
     * @description
     * 
     * This takes an `object` and converts it to a `FlowInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FlowInformation`.
     * @returns {FlowInformation}
     */
    public static _from_object (_o: { [_K in keyof (FlowInformation)]: (FlowInformation)[_K] }): FlowInformation {
        return new FlowInformation(_o.flowDescription, _o.ethFlowDescription, _o.tosTrafficClass, _o.spi, _o.flowLabel, _o.flowDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `flowDirection`
         * @public
         * @static
         */

    public static _enum_for_flowDirection: typeof _enum_for_FlowDirection = _enum_for_FlowDirection;
}

/**
 * @summary The Leading Root Component Types of FlowInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FlowInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("flowDescription", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ethFlowDescription", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tosTrafficClass", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("spi", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("flowLabel", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("flowDirection", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of FlowInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FlowInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FlowInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FlowInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FlowInformation: $.ASN1Decoder<FlowInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlowInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlowInformation (el: _Element): FlowInformation {
    if (!_cached_decoder_for_FlowInformation) { _cached_decoder_for_FlowInformation = function (el: _Element): FlowInformation {
    let flowDescription: OPTIONAL<FlowDescription>;
    let ethFlowDescription: OPTIONAL<EthFlowDescription>;
    let tosTrafficClass: OPTIONAL<OCTET_STRING>;
    let spi: OPTIONAL<OCTET_STRING>;
    let flowLabel: OPTIONAL<OCTET_STRING>;
    let flowDirection: OPTIONAL<FlowDirection>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "flowDescription": (_el: _Element): void => { flowDescription = $._decode_implicit<FlowDescription>(() => _decode_FlowDescription)(_el); },
        "ethFlowDescription": (_el: _Element): void => { ethFlowDescription = $._decode_implicit<EthFlowDescription>(() => _decode_EthFlowDescription)(_el); },
        "tosTrafficClass": (_el: _Element): void => {
            tosTrafficClass = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (tosTrafficClass.length < 2 || tosTrafficClass.length > 2) {
                throw new ASN1SizeError("FlowInformation.tosTrafficClass violates SIZE constraint");
            }
        },
        "spi": (_el: _Element): void => {
            spi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (spi.length < 4 || spi.length > 4) {
                throw new ASN1SizeError("FlowInformation.spi violates SIZE constraint");
            }
        },
        "flowLabel": (_el: _Element): void => {
            flowLabel = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (flowLabel.length < 3 || flowLabel.length > 3) {
                throw new ASN1SizeError("FlowInformation.flowLabel violates SIZE constraint");
            }
        },
        "flowDirection": (_el: _Element): void => { flowDirection = $._decode_implicit<FlowDirection>(() => _decode_FlowDirection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FlowInformation,
        _extension_additions_list_spec_for_FlowInformation,
        _root_component_type_list_2_spec_for_FlowInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FlowInformation(
        flowDescription,
        ethFlowDescription,
        tosTrafficClass,
        spi,
        flowLabel,
        flowDirection,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FlowInformation(el);
}

let _cached_encoder_for_FlowInformation: $.ASN1Encoder<FlowInformation> | null = null;

/**
 * @summary Encodes a(n) FlowInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlowInformation, encoded as an ASN.1 Element.
 */
export
function _encode_FlowInformation (value: FlowInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlowInformation) { _cached_encoder_for_FlowInformation = function (value: FlowInformation, elGetter: $.ASN1Encoder<FlowInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.flowDescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FlowDescription, $.BER)(value.flowDescription, $.BER);
    }
    if (value.ethFlowDescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EthFlowDescription, $.BER)(value.ethFlowDescription, $.BER);
    }
    if (value.tosTrafficClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.tosTrafficClass, $.BER);
    }
    if (value.spi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.spi, $.BER);
    }
    if (value.flowLabel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.flowLabel, $.BER);
    }
    if (value.flowDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_FlowDirection, $.BER)(value.flowDirection, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FlowInformation(value, elGetter);
}


/* eslint-enable */
