/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";
// export { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";


/**
 * @summary UploadSegment_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UploadSegment-Response ::= SEQUENCE {
 *    loadData               LoadData,
 *    moreFollows            [1] IMPLICIT BOOLEAN DEFAULT TRUE }
 * ```
 * 
 * @class
 */
export
class UploadSegment_Response {
    constructor (
        /**
         * @summary `loadData`.
         * @public
         * @readonly
         */
        readonly loadData: LoadData,
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UploadSegment_Response
     * @description
     * 
     * This takes an `object` and converts it to a `UploadSegment_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UploadSegment_Response`.
     * @returns {UploadSegment_Response}
     */
    public static _from_object (_o: { [_K in keyof (UploadSegment_Response)]: (UploadSegment_Response)[_K] }): UploadSegment_Response {
        return new UploadSegment_Response(_o.loadData, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return true; }
}

/**
 * @summary The Leading Root Component Types of UploadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UploadSegment_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("loadData", false, $.hasAnyTag),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of UploadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UploadSegment_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UploadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UploadSegment_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UploadSegment_Response: $.ASN1Decoder<UploadSegment_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UploadSegment_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UploadSegment_Response (el: _Element): UploadSegment_Response {
    if (!_cached_decoder_for_UploadSegment_Response) { _cached_decoder_for_UploadSegment_Response = function (el: _Element): UploadSegment_Response {
    let loadData!: LoadData;
    let moreFollows: OPTIONAL<BOOLEAN> = UploadSegment_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "loadData": (_el: _Element): void => { loadData = _decode_LoadData(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UploadSegment_Response,
        _extension_additions_list_spec_for_UploadSegment_Response,
        _root_component_type_list_2_spec_for_UploadSegment_Response,
        undefined,
    );
    return new UploadSegment_Response(
        loadData,
        moreFollows
    );
}; }
    return _cached_decoder_for_UploadSegment_Response(el);
}

let _cached_encoder_for_UploadSegment_Response: $.ASN1Encoder<UploadSegment_Response> | null = null;

/**
 * @summary Encodes a(n) UploadSegment_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UploadSegment_Response, encoded as an ASN.1 Element.
 */
export
function _encode_UploadSegment_Response (value: UploadSegment_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UploadSegment_Response) { _cached_encoder_for_UploadSegment_Response = function (value: UploadSegment_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LoadData(value.loadData, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, UploadSegment_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UploadSegment_Response(value, elGetter);
}


/* eslint-enable */
