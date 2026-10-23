/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CauseType, _encode_CauseType, _enum_for_CauseType, CauseType } from "../MONTEChargingDataTypes/CauseType.ta.mjs";


/**
 * @summary CommunicationFailureInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationFailureInfo ::= SEQUENCE {
 *    causeType    [0] IMPLICIT CauseType OPTIONAL,
 *    s1APCause    [1] IMPLICIT INTEGER OPTIONAL,
 *    rANAPCause   [2] IMPLICIT INTEGER OPTIONAL,
 *    bSSGPCause   [3] IMPLICIT INTEGER OPTIONAL,
 *    gMMCause     [4] IMPLICIT INTEGER OPTIONAL,
 *    sMCause      [5] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CommunicationFailureInfo {
    /**
     * @summary `causeType`.
     * @public
     * @readonly
     */
    readonly causeType: OPTIONAL<CauseType>;
    /**
     * @summary `s1APCause`.
     * @public
     * @readonly
     */
    readonly s1APCause: OPTIONAL<INTEGER>;
    /**
     * @summary `rANAPCause`.
     * @public
     * @readonly
     */
    readonly rANAPCause: OPTIONAL<INTEGER>;
    /**
     * @summary `bSSGPCause`.
     * @public
     * @readonly
     */
    readonly bSSGPCause: OPTIONAL<INTEGER>;
    /**
     * @summary `gMMCause`.
     * @public
     * @readonly
     */
    readonly gMMCause: OPTIONAL<INTEGER>;
    /**
     * @summary `sMCause`.
     * @public
     * @readonly
     */
    readonly sMCause: OPTIONAL<INTEGER>;

    constructor (
        causeType: OPTIONAL<CauseType>,
        s1APCause: OPTIONAL<INTEGER>,
        rANAPCause: OPTIONAL<INTEGER>,
        bSSGPCause: OPTIONAL<INTEGER>,
        gMMCause: OPTIONAL<INTEGER>,
        sMCause: OPTIONAL<INTEGER>
    ) {
        this.causeType = causeType;
        this.s1APCause = s1APCause;
        this.rANAPCause = rANAPCause;
        this.bSSGPCause = bSSGPCause;
        this.gMMCause = gMMCause;
        this.sMCause = sMCause;
    }

    /**
     * @summary Restructures an object into a CommunicationFailureInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationFailureInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationFailureInfo`.
     * @returns {CommunicationFailureInfo}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationFailureInfo)]: (CommunicationFailureInfo)[_K] }): CommunicationFailureInfo {
        return new CommunicationFailureInfo(_o.causeType, _o.s1APCause, _o.rANAPCause, _o.bSSGPCause, _o.gMMCause, _o.sMCause);
    }

        /**
         * @summary The enum used as the type of the component `causeType`
         * @public
         * @static
         */

    public static _enum_for_causeType = _enum_for_CauseType;
}

/**
 * @summary The Leading Root Component Types of CommunicationFailureInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationFailureInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("causeType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("s1APCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANAPCause", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bSSGPCause", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gMMCause", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMCause", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CommunicationFailureInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationFailureInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationFailureInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationFailureInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommunicationFailureInfo: $.ASN1Decoder<CommunicationFailureInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationFailureInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationFailureInfo (el: _Element): CommunicationFailureInfo {
    if (!_cached_decoder_for_CommunicationFailureInfo) { _cached_decoder_for_CommunicationFailureInfo = function (el: _Element): CommunicationFailureInfo {
    let causeType: OPTIONAL<CauseType>;
    let s1APCause: OPTIONAL<INTEGER>;
    let rANAPCause: OPTIONAL<INTEGER>;
    let bSSGPCause: OPTIONAL<INTEGER>;
    let gMMCause: OPTIONAL<INTEGER>;
    let sMCause: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "causeType": (_el: _Element): void => { causeType = $._decode_implicit<CauseType>(() => _decode_CauseType)(_el); },
        "s1APCause": (_el: _Element): void => { s1APCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rANAPCause": (_el: _Element): void => { rANAPCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bSSGPCause": (_el: _Element): void => { bSSGPCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "gMMCause": (_el: _Element): void => { gMMCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMCause": (_el: _Element): void => { sMCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommunicationFailureInfo,
        _extension_additions_list_spec_for_CommunicationFailureInfo,
        _root_component_type_list_2_spec_for_CommunicationFailureInfo,
        undefined,
    );
    return new CommunicationFailureInfo(
        causeType,
        s1APCause,
        rANAPCause,
        bSSGPCause,
        gMMCause,
        sMCause
    );
}; }
    return _cached_decoder_for_CommunicationFailureInfo(el);
}

let _cached_encoder_for_CommunicationFailureInfo: $.ASN1Encoder<CommunicationFailureInfo> | null = null;

/**
 * @summary Encodes a(n) CommunicationFailureInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationFailureInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationFailureInfo (value: CommunicationFailureInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationFailureInfo) { _cached_encoder_for_CommunicationFailureInfo = function (value: CommunicationFailureInfo, _elGetter: $.ASN1Encoder<CommunicationFailureInfo>): _Element {
    const _components: _Element[] = [];
    if (value.causeType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CauseType, $.BER)(value.causeType, $.BER));
    }
    if (value.s1APCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.s1APCause, $.BER));
    }
    if (value.rANAPCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.rANAPCause, $.BER));
    }
    if (value.bSSGPCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.bSSGPCause, $.BER));
    }
    if (value.gMMCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.gMMCause, $.BER));
    }
    if (value.sMCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sMCause, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommunicationFailureInfo(value, elGetter);
}


/* eslint-enable */
