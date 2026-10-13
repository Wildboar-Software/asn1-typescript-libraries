/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MasterChannelComposition_mcOrVcList, _decode_MasterChannelComposition_mcOrVcList, _encode_MasterChannelComposition_mcOrVcList } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/MasterChannelComposition-mcOrVcList.ta.mjs";
// export { MasterChannelComposition_mcOrVcList, _decode_MasterChannelComposition_mcOrVcList, _encode_MasterChannelComposition_mcOrVcList } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/MasterChannelComposition-mcOrVcList.ta.mjs";


/**
 * @summary MasterChannelComposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterChannelComposition ::= SEQUENCE
 * {  spacecraftId               INTEGER (0 .. 65535)
 * -- Value range for TM Transfer Frames: (0 .. 1023)
 * -- Value range for AOS Transfer Frames: (0 .. 255)
 * -- Value range for USLP Transfer Frames: (0 .. 65535)
 * ,   versionNumber             INTEGER (0 | 1 | 12)
 * -- Value for TM (Version 1) Transfer Frames: 0 ('00'B)
 * -- Value for AOS (Version 2) Transfer Frames: 1 ('01'B)
 * -- Value for USLP (Version 4) Transfer Frames: 12 ('1100'B)
 * ,   mcOrVcList                CHOICE
 *    {  masterChannel                [0] NULL
 *    ,  vcList                       [1] SET SIZE (1 .. 64) OF VcId
 *    -- Set size range for TM Transfer Frames: (1 .. 8)
 *    -- Set size range for AOS Transfer Frames: (1 .. 64)
 *    -- Set size range for USLP Transfer Frames: (1 .. 64)
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class MasterChannelComposition {
    /**
     * @summary `spacecraftId`.
     * @public
     * @readonly
     */
    readonly spacecraftId: INTEGER;
    /**
     * @summary `versionNumber`.
     * @public
     * @readonly
     */
    readonly versionNumber: INTEGER;
    /**
     * @summary `mcOrVcList`.
     * @public
     * @readonly
     */
    readonly mcOrVcList: MasterChannelComposition_mcOrVcList;

    constructor (
        spacecraftId: INTEGER,
        versionNumber: INTEGER,
        mcOrVcList: MasterChannelComposition_mcOrVcList
    ) {
        this.spacecraftId = spacecraftId;
        this.versionNumber = versionNumber;
        this.mcOrVcList = mcOrVcList;
    }

    /**
     * @summary Restructures an object into a MasterChannelComposition
     * @description
     * 
     * This takes an `object` and converts it to a `MasterChannelComposition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterChannelComposition`.
     * @returns {MasterChannelComposition}
     */
    public static _from_object (_o: { [_K in keyof (MasterChannelComposition)]: (MasterChannelComposition)[_K] }): MasterChannelComposition {
        return new MasterChannelComposition(_o.spacecraftId, _o.versionNumber, _o.mcOrVcList);
    }


}

/**
 * @summary The Leading Root Component Types of MasterChannelComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MasterChannelComposition: $.ComponentSpec[] = [
    new $.ComponentSpec("spacecraftId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("versionNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mcOrVcList", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of MasterChannelComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MasterChannelComposition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MasterChannelComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MasterChannelComposition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MasterChannelComposition: $.ASN1Decoder<MasterChannelComposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterChannelComposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MasterChannelComposition (el: _Element): MasterChannelComposition {
    if (!_cached_decoder_for_MasterChannelComposition) { _cached_decoder_for_MasterChannelComposition = function (el: _Element): MasterChannelComposition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MasterChannelComposition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "spacecraftId";
    sequence[1].name = "versionNumber";
    sequence[2].name = "mcOrVcList";
    let spacecraftId!: INTEGER;
    let versionNumber!: INTEGER;
    let mcOrVcList!: MasterChannelComposition_mcOrVcList;
    spacecraftId = $._decodeInteger(sequence[0]);
    versionNumber = $._decodeInteger(sequence[1]);
    mcOrVcList = _decode_MasterChannelComposition_mcOrVcList(sequence[2]);
    return new MasterChannelComposition(
        spacecraftId,
        versionNumber,
        mcOrVcList,

    );
}; }
    return _cached_decoder_for_MasterChannelComposition(el);
}

let _cached_encoder_for_MasterChannelComposition: $.ASN1Encoder<MasterChannelComposition> | null = null;

/**
 * @summary Encodes a(n) MasterChannelComposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterChannelComposition, encoded as an ASN.1 Element.
 */
export
function _encode_MasterChannelComposition (value: MasterChannelComposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MasterChannelComposition) { _cached_encoder_for_MasterChannelComposition = function (value: MasterChannelComposition, elGetter: $.ASN1Encoder<MasterChannelComposition>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.spacecraftId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.versionNumber, $.BER),
        /* REQUIRED   */ _encode_MasterChannelComposition_mcOrVcList(value.mcOrVcList, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MasterChannelComposition(value, elGetter);
}


/* eslint-enable */
