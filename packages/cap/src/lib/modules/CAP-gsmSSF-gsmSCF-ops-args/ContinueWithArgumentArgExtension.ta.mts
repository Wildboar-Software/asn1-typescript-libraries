/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { type LegOrCallSegment, _decode_LegOrCallSegment, _encode_LegOrCallSegment } from "../CAP-datatypes/LegOrCallSegment.ta.mjs";



/**
 * @summary ContinueWithArgumentArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArgExtension {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     suppress-D-CSI            [0]    NULL                    OPTIONAL,
 *     suppress-N-CSI            [1]    NULL                    OPTIONAL,
 *     suppressOutgoingCallBarring        [2]    NULL                    OPTIONAL,
 *     legOrCallSegment            [3]    LegOrCallSegment {bound}        OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ContinueWithArgumentArgExtension {
    constructor (
        /**
         * @summary `suppress_D_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_D_CSI: OPTIONAL<NULL>,
        /**
         * @summary `suppress_N_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_N_CSI: OPTIONAL<NULL>,
        /**
         * @summary `suppressOutgoingCallBarring`.
         * @public
         * @readonly
         */
        readonly suppressOutgoingCallBarring: OPTIONAL<NULL>,
        /**
         * @summary `legOrCallSegment`.
         * @public
         * @readonly
         */
        readonly legOrCallSegment: OPTIONAL<LegOrCallSegment>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinueWithArgumentArgExtension
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueWithArgumentArgExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueWithArgumentArgExtension`.
     * @returns {ContinueWithArgumentArgExtension}
     */
    public static _from_object (_o: { [_K in keyof (ContinueWithArgumentArgExtension)]: (ContinueWithArgumentArgExtension)[_K] }): ContinueWithArgumentArgExtension {
        return new ContinueWithArgumentArgExtension(_o.suppress_D_CSI, _o.suppress_N_CSI, _o.suppressOutgoingCallBarring, _o.legOrCallSegment, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContinueWithArgumentArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueWithArgumentArgExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("suppress-D-CSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("suppress-N-CSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("suppressOutgoingCallBarring", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("legOrCallSegment", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ContinueWithArgumentArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueWithArgumentArgExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueWithArgumentArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueWithArgumentArgExtension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContinueWithArgumentArgExtension: $.ASN1Decoder<ContinueWithArgumentArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueWithArgumentArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueWithArgumentArgExtension (el: _Element): ContinueWithArgumentArgExtension {
    if (!_cached_decoder_for_ContinueWithArgumentArgExtension) { _cached_decoder_for_ContinueWithArgumentArgExtension = function (el: _Element): ContinueWithArgumentArgExtension {
    let suppress_D_CSI: OPTIONAL<NULL>;
    let suppress_N_CSI: OPTIONAL<NULL>;
    let suppressOutgoingCallBarring: OPTIONAL<NULL>;
    let legOrCallSegment: OPTIONAL<LegOrCallSegment>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "suppress-D-CSI": (_el: _Element): void => { suppress_D_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-N-CSI": (_el: _Element): void => { suppress_N_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppressOutgoingCallBarring": (_el: _Element): void => { suppressOutgoingCallBarring = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "legOrCallSegment": (_el: _Element): void => { legOrCallSegment = $._decode_implicit<LegOrCallSegment>(() => _decode_LegOrCallSegment)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueWithArgumentArgExtension,
        _extension_additions_list_spec_for_ContinueWithArgumentArgExtension,
        _root_component_type_list_2_spec_for_ContinueWithArgumentArgExtension,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueWithArgumentArgExtension(
        suppress_D_CSI,
        suppress_N_CSI,
        suppressOutgoingCallBarring,
        legOrCallSegment,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueWithArgumentArgExtension(el);
}

let _cached_encoder_for_ContinueWithArgumentArgExtension: $.ASN1Encoder<ContinueWithArgumentArgExtension> | null = null;

/**
 * @summary Encodes a(n) ContinueWithArgumentArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueWithArgumentArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueWithArgumentArgExtension (value: ContinueWithArgumentArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueWithArgumentArgExtension) { _cached_encoder_for_ContinueWithArgumentArgExtension = function (value: ContinueWithArgumentArgExtension): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.suppress_D_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.suppress_D_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_N_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.suppress_N_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.suppressOutgoingCallBarring === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.suppressOutgoingCallBarring, $.BER)),
            /* IF_ABSENT  */ ((value.legOrCallSegment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LegOrCallSegment, $.BER)(value.legOrCallSegment, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContinueWithArgumentArgExtension(value, elGetter);
}


/* eslint-enable */
