/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
// export { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
import { DNAIChangeType, _decode_DNAIChangeType, _encode_DNAIChangeType, _enum_for_DNAIChangeType } from "../TS33128Payloads/DNAIChangeType.ta.mjs";
// export { DNAIChangeType, _enum_for_DNAIChangeType, DNAIChangeType_early /* IMPORTED_LONG_ENUMERATION_ITEM */, early /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNAIChangeType_earlyAndLate /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyAndLate /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNAIChangeType_late /* IMPORTED_LONG_ENUMERATION_ITEM */, late /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DNAIChangeType, _encode_DNAIChangeType } from "../TS33128Payloads/DNAIChangeType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";


/**
 * @summary UPPathChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UPPathChange ::= SEQUENCE
 * {
 *     sourceDNAI                    [1] DNAI OPTIONAL,
 *     targetDNAI                    [2] DNAI OPTIONAL,
 *     dNAIChangeType                [3] DNAIChangeType OPTIONAL,
 *     sourceUEIPAddr                [4] IPAddress OPTIONAL,
 *     targetUEIPAddr                [5] IPAddress OPTIONAL,
 *     sourceTrafficRouting          [6] RouteToLocation OPTIONAL,
 *     targetTrafficRouting          [7] RouteToLocation OPTIONAL,
 *     mACAddress                    [8] MACAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UPPathChange {
    constructor (
        /**
         * @summary `sourceDNAI`.
         * @public
         * @readonly
         */
        readonly sourceDNAI: OPTIONAL<DNAI>,
        /**
         * @summary `targetDNAI`.
         * @public
         * @readonly
         */
        readonly targetDNAI: OPTIONAL<DNAI>,
        /**
         * @summary `dNAIChangeType`.
         * @public
         * @readonly
         */
        readonly dNAIChangeType: OPTIONAL<DNAIChangeType>,
        /**
         * @summary `sourceUEIPAddr`.
         * @public
         * @readonly
         */
        readonly sourceUEIPAddr: OPTIONAL<IPAddress>,
        /**
         * @summary `targetUEIPAddr`.
         * @public
         * @readonly
         */
        readonly targetUEIPAddr: OPTIONAL<IPAddress>,
        /**
         * @summary `sourceTrafficRouting`.
         * @public
         * @readonly
         */
        readonly sourceTrafficRouting: OPTIONAL<RouteToLocation>,
        /**
         * @summary `targetTrafficRouting`.
         * @public
         * @readonly
         */
        readonly targetTrafficRouting: OPTIONAL<RouteToLocation>,
        /**
         * @summary `mACAddress`.
         * @public
         * @readonly
         */
        readonly mACAddress: OPTIONAL<MACAddress>
    ) {}

    /**
     * @summary Restructures an object into a UPPathChange
     * @description
     * 
     * This takes an `object` and converts it to a `UPPathChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UPPathChange`.
     * @returns {UPPathChange}
     */
    public static _from_object (_o: { [_K in keyof (UPPathChange)]: (UPPathChange)[_K] }): UPPathChange {
        return new UPPathChange(_o.sourceDNAI, _o.targetDNAI, _o.dNAIChangeType, _o.sourceUEIPAddr, _o.targetUEIPAddr, _o.sourceTrafficRouting, _o.targetTrafficRouting, _o.mACAddress);
    }

        /**
         * @summary The enum used as the type of the component `dNAIChangeType`
         * @public
         * @static
         */

    public static _enum_for_dNAIChangeType = _enum_for_DNAIChangeType;
}

/**
 * @summary The Leading Root Component Types of UPPathChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UPPathChange: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceDNAI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetDNAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dNAIChangeType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sourceUEIPAddr", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("targetUEIPAddr", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sourceTrafficRouting", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetTrafficRouting", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mACAddress", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of UPPathChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UPPathChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UPPathChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UPPathChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UPPathChange: $.ASN1Decoder<UPPathChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UPPathChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UPPathChange (el: _Element): UPPathChange {
    if (!_cached_decoder_for_UPPathChange) { _cached_decoder_for_UPPathChange = function (el: _Element): UPPathChange {
    let sourceDNAI: OPTIONAL<DNAI>;
    let targetDNAI: OPTIONAL<DNAI>;
    let dNAIChangeType: OPTIONAL<DNAIChangeType>;
    let sourceUEIPAddr: OPTIONAL<IPAddress>;
    let targetUEIPAddr: OPTIONAL<IPAddress>;
    let sourceTrafficRouting: OPTIONAL<RouteToLocation>;
    let targetTrafficRouting: OPTIONAL<RouteToLocation>;
    let mACAddress: OPTIONAL<MACAddress>;
    const callbacks: $.DecodingMap = {
        "sourceDNAI": (_el: _Element): void => { sourceDNAI = $._decode_implicit<DNAI>(() => _decode_DNAI)(_el); },
        "targetDNAI": (_el: _Element): void => { targetDNAI = $._decode_implicit<DNAI>(() => _decode_DNAI)(_el); },
        "dNAIChangeType": (_el: _Element): void => { dNAIChangeType = $._decode_implicit<DNAIChangeType>(() => _decode_DNAIChangeType)(_el); },
        "sourceUEIPAddr": (_el: _Element): void => { sourceUEIPAddr = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "targetUEIPAddr": (_el: _Element): void => { targetUEIPAddr = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourceTrafficRouting": (_el: _Element): void => { sourceTrafficRouting = $._decode_implicit<RouteToLocation>(() => _decode_RouteToLocation)(_el); },
        "targetTrafficRouting": (_el: _Element): void => { targetTrafficRouting = $._decode_implicit<RouteToLocation>(() => _decode_RouteToLocation)(_el); },
        "mACAddress": (_el: _Element): void => { mACAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UPPathChange,
        _extension_additions_list_spec_for_UPPathChange,
        _root_component_type_list_2_spec_for_UPPathChange,
        undefined,
    );
    return new UPPathChange(
        sourceDNAI,
        targetDNAI,
        dNAIChangeType,
        sourceUEIPAddr,
        targetUEIPAddr,
        sourceTrafficRouting,
        targetTrafficRouting,
        mACAddress
    );
}; }
    return _cached_decoder_for_UPPathChange(el);
}

let _cached_encoder_for_UPPathChange: $.ASN1Encoder<UPPathChange> | null = null;

/**
 * @summary Encodes a(n) UPPathChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UPPathChange, encoded as an ASN.1 Element.
 */
export
function _encode_UPPathChange (value: UPPathChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UPPathChange) { _cached_encoder_for_UPPathChange = function (value: UPPathChange, elGetter: $.ASN1Encoder<UPPathChange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sourceDNAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DNAI, $.BER)(value.sourceDNAI, $.BER)),
            /* IF_ABSENT  */ ((value.targetDNAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DNAI, $.BER)(value.targetDNAI, $.BER)),
            /* IF_ABSENT  */ ((value.dNAIChangeType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DNAIChangeType, $.BER)(value.dNAIChangeType, $.BER)),
            /* IF_ABSENT  */ ((value.sourceUEIPAddr === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.sourceUEIPAddr, $.BER)),
            /* IF_ABSENT  */ ((value.targetUEIPAddr === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_IPAddress, $.BER)(value.targetUEIPAddr, $.BER)),
            /* IF_ABSENT  */ ((value.sourceTrafficRouting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RouteToLocation, $.BER)(value.sourceTrafficRouting, $.BER)),
            /* IF_ABSENT  */ ((value.targetTrafficRouting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RouteToLocation, $.BER)(value.targetTrafficRouting, $.BER)),
            /* IF_ABSENT  */ ((value.mACAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MACAddress, $.BER)(value.mACAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UPPathChange(value, elGetter);
}


/* eslint-enable */
