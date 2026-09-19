/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MuxType, _decode_MuxType, _encode_MuxType, _enum_for_MuxType } from "../MEDIA-GATEWAY-CONTROL/MuxType.ta.mjs";
// export { MuxType, _enum_for_MuxType, MuxType_h221 /* IMPORTED_LONG_ENUMERATION_ITEM */, h221 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MuxType_h223 /* IMPORTED_LONG_ENUMERATION_ITEM */, h223 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MuxType_h226 /* IMPORTED_LONG_ENUMERATION_ITEM */, h226 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MuxType_v76 /* IMPORTED_LONG_ENUMERATION_ITEM */, v76 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MuxType_nx64k /* IMPORTED_LONG_ENUMERATION_ITEM */, nx64k /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MuxType, _encode_MuxType } from "../MEDIA-GATEWAY-CONTROL/MuxType.ta.mjs";
import { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
// export { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
import { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";
// export { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";


/**
 * @summary MuxDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxDescriptor ::= SEQUENCE
 *     {
 *         muxType                    [0] MuxType,
 *         termList                [1] SEQUENCE OF TerminationID,
 *         nonStandardData            [2] NonStandardData OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class MuxDescriptor {
    constructor (
        /**
         * @summary `muxType`.
         * @public
         * @readonly
         */
        readonly muxType: MuxType,
        /**
         * @summary `termList`.
         * @public
         * @readonly
         */
        readonly termList: TerminationID[],
        /**
         * @summary `nonStandardData`.
         * @public
         * @readonly
         */
        readonly nonStandardData: OPTIONAL<NonStandardData>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MuxDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `MuxDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MuxDescriptor`.
     * @returns {MuxDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (MuxDescriptor)]: (MuxDescriptor)[_K] }): MuxDescriptor {
        return new MuxDescriptor(_o.muxType, _o.termList, _o.nonStandardData, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `muxType`
         * @public
         * @static
         */

    public static _enum_for_muxType = _enum_for_MuxType;
}

/**
 * @summary The Leading Root Component Types of MuxDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MuxDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("muxType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("termList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nonStandardData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MuxDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MuxDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MuxDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MuxDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MuxDescriptor: $.ASN1Decoder<MuxDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MuxDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MuxDescriptor (el: _Element): MuxDescriptor {
    if (!_cached_decoder_for_MuxDescriptor) { _cached_decoder_for_MuxDescriptor = function (el: _Element): MuxDescriptor {
    let muxType!: MuxType;
    let termList!: TerminationID[];
    let nonStandardData: OPTIONAL<NonStandardData>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "muxType": (_el: _Element): void => { muxType = $._decode_implicit<MuxType>(() => _decode_MuxType)(_el); },
        "termList": (_el: _Element): void => { termList = $._decode_implicit<TerminationID[]>(() => $._decodeSequenceOf<TerminationID>(() => _decode_TerminationID))(_el); },
        "nonStandardData": (_el: _Element): void => { nonStandardData = $._decode_implicit<NonStandardData>(() => _decode_NonStandardData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MuxDescriptor,
        _extension_additions_list_spec_for_MuxDescriptor,
        _root_component_type_list_2_spec_for_MuxDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MuxDescriptor(
        muxType,
        termList,
        nonStandardData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MuxDescriptor(el);
}

let _cached_encoder_for_MuxDescriptor: $.ASN1Encoder<MuxDescriptor> | null = null;

/**
 * @summary Encodes a(n) MuxDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MuxDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_MuxDescriptor (value: MuxDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MuxDescriptor) { _cached_encoder_for_MuxDescriptor = function (value: MuxDescriptor, elGetter: $.ASN1Encoder<MuxDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MuxType, $.BER)(value.muxType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TerminationID>(() => _encode_TerminationID, $.BER), $.BER)(value.termList, $.BER),
            /* IF_ABSENT  */ ((value.nonStandardData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NonStandardData, $.BER)(value.nonStandardData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MuxDescriptor(value, elGetter);
}


/* eslint-enable */
