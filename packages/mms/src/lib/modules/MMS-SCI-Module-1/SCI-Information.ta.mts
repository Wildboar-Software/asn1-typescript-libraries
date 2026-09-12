/* eslint-disable */
import {
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
import { VMD_File, _decode_VMD_File, _encode_VMD_File } from "../MMS-SCI-Module-1/VMD-File.ta.mjs";
// export { VMD_File, _decode_VMD_File, _encode_VMD_File } from "../MMS-SCI-Module-1/VMD-File.ta.mjs";
import { Service_and_Parameter_CBBs, _decode_Service_and_Parameter_CBBs, _encode_Service_and_Parameter_CBBs } from "../MMS-SCI-Module-1/Service-and-Parameter-CBBs.ta.mjs";
// export { Service_and_Parameter_CBBs, _decode_Service_and_Parameter_CBBs, _encode_Service_and_Parameter_CBBs } from "../MMS-SCI-Module-1/Service-and-Parameter-CBBs.ta.mjs";


/**
 * @summary SCI_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCI-Information ::= SEQUENCE {
 *    partOne          [0] IMPLICIT VMD-File,
 *    partTwo          [1] IMPLICIT Service-and-Parameter-CBBs
 * }
 * ```
 * 
 * @class
 */
export
class SCI_Information {
    constructor (
        /**
         * @summary `partOne`.
         * @public
         * @readonly
         */
        readonly partOne: VMD_File,
        /**
         * @summary `partTwo`.
         * @public
         * @readonly
         */
        readonly partTwo: Service_and_Parameter_CBBs
    ) {}

    /**
     * @summary Restructures an object into a SCI_Information
     * @description
     * 
     * This takes an `object` and converts it to a `SCI_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCI_Information`.
     * @returns {SCI_Information}
     */
    public static _from_object (_o: { [_K in keyof (SCI_Information)]: (SCI_Information)[_K] }): SCI_Information {
        return new SCI_Information(_o.partOne, _o.partTwo);
    }


}

/**
 * @summary The Leading Root Component Types of SCI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCI_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("partOne", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partTwo", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SCI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCI_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCI_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCI_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCI_Information: $.ASN1Decoder<SCI_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCI_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCI_Information (el: _Element): SCI_Information {
    if (!_cached_decoder_for_SCI_Information) { _cached_decoder_for_SCI_Information = function (el: _Element): SCI_Information {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SCI-Information contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "partOne";
    sequence[1].name = "partTwo";
    let partOne!: VMD_File;
    let partTwo!: Service_and_Parameter_CBBs;
    partOne = $._decode_implicit<VMD_File>(() => _decode_VMD_File)(sequence[0]);
    partTwo = $._decode_implicit<Service_and_Parameter_CBBs>(() => _decode_Service_and_Parameter_CBBs)(sequence[1]);
    return new SCI_Information(
        partOne,
        partTwo,

    );
}; }
    return _cached_decoder_for_SCI_Information(el);
}

let _cached_encoder_for_SCI_Information: $.ASN1Encoder<SCI_Information> | null = null;

/**
 * @summary Encodes a(n) SCI_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCI_Information, encoded as an ASN.1 Element.
 */
export
function _encode_SCI_Information (value: SCI_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCI_Information) { _cached_encoder_for_SCI_Information = function (value: SCI_Information): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_VMD_File, $.BER)(value.partOne, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service_and_Parameter_CBBs, $.BER)(value.partTwo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCI_Information(value, elGetter);
}


/* eslint-enable */
