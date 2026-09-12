/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary DomainManagementParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainManagementParameters ::= SEQUENCE {
 *    loadDataOctet                 [0] MMSString,
 *        -- description of the format of Load Data if the octet string form is used
 *    loadDataSyntax                [1] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER,
 *        -- identifier of the Abstract Syntaxes used
 *    maxUploads                    [2] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class DomainManagementParameters {
    constructor (
        /**
         * @summary `loadDataOctet`.
         * @public
         * @readonly
         */
        readonly loadDataOctet: MMSString,
        /**
         * @summary `loadDataSyntax`.
         * @public
         * @readonly
         */
        readonly loadDataSyntax: OBJECT_IDENTIFIER[],
        /**
         * @summary `maxUploads`.
         * @public
         * @readonly
         */
        readonly maxUploads: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a DomainManagementParameters
     * @description
     * 
     * This takes an `object` and converts it to a `DomainManagementParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainManagementParameters`.
     * @returns {DomainManagementParameters}
     */
    public static _from_object (_o: { [_K in keyof (DomainManagementParameters)]: (DomainManagementParameters)[_K] }): DomainManagementParameters {
        return new DomainManagementParameters(_o.loadDataOctet, _o.loadDataSyntax, _o.maxUploads);
    }


}

/**
 * @summary The Leading Root Component Types of DomainManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DomainManagementParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("loadDataOctet", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("loadDataSyntax", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxUploads", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DomainManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DomainManagementParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DomainManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DomainManagementParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DomainManagementParameters: $.ASN1Decoder<DomainManagementParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainManagementParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainManagementParameters (el: _Element): DomainManagementParameters {
    if (!_cached_decoder_for_DomainManagementParameters) { _cached_decoder_for_DomainManagementParameters = function (el: _Element): DomainManagementParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DomainManagementParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "loadDataOctet";
    sequence[1].name = "loadDataSyntax";
    sequence[2].name = "maxUploads";
    let loadDataOctet!: MMSString;
    let loadDataSyntax!: OBJECT_IDENTIFIER[];
    let maxUploads!: INTEGER;
    loadDataOctet = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    loadDataSyntax = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(sequence[1]);
    maxUploads = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    return new DomainManagementParameters(
        loadDataOctet,
        loadDataSyntax,
        maxUploads,

    );
}; }
    return _cached_decoder_for_DomainManagementParameters(el);
}

let _cached_encoder_for_DomainManagementParameters: $.ASN1Encoder<DomainManagementParameters> | null = null;

/**
 * @summary Encodes a(n) DomainManagementParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainManagementParameters, encoded as an ASN.1 Element.
 */
export
function _encode_DomainManagementParameters (value: DomainManagementParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainManagementParameters) { _cached_encoder_for_DomainManagementParameters = function (value: DomainManagementParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.loadDataOctet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.loadDataSyntax, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.maxUploads, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DomainManagementParameters(value, elGetter);
}


/* eslint-enable */
