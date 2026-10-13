/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContentLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentLocation ::= SEQUENCE
 * {
 *     contentLocationURI        [1] OCTET STRING,
 * -- See Clause 7.3.10 of [90] for the coding of the contentLocationURI.
 *     statusCount                [2] INTEGER OPTIONAL,
 * -- the statusCount is included only for the MMS Delete event.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ContentLocation {
    /**
     * @summary `contentLocationURI`.
     * @public
     * @readonly
     */
    readonly contentLocationURI: OCTET_STRING;
    /**
     * @summary `statusCount`.
     * @public
     * @readonly
     */
    readonly statusCount: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        contentLocationURI: OCTET_STRING,
        statusCount: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.contentLocationURI = contentLocationURI;
        this.statusCount = statusCount;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ContentLocation
     * @description
     * 
     * This takes an `object` and converts it to a `ContentLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentLocation`.
     * @returns {ContentLocation}
     */
    public static _from_object (_o: { [_K in keyof (ContentLocation)]: (ContentLocation)[_K] }): ContentLocation {
        return new ContentLocation(_o.contentLocationURI, _o.statusCount, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContentLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContentLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("contentLocationURI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("statusCount", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ContentLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContentLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContentLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContentLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContentLocation: $.ASN1Decoder<ContentLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContentLocation (el: _Element): ContentLocation {
    if (!_cached_decoder_for_ContentLocation) { _cached_decoder_for_ContentLocation = function (el: _Element): ContentLocation {
    let contentLocationURI!: OCTET_STRING;
    let statusCount: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "contentLocationURI": (_el: _Element): void => { contentLocationURI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "statusCount": (_el: _Element): void => { statusCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContentLocation,
        _extension_additions_list_spec_for_ContentLocation,
        _root_component_type_list_2_spec_for_ContentLocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContentLocation(
        contentLocationURI,
        statusCount,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContentLocation(el);
}

let _cached_encoder_for_ContentLocation: $.ASN1Encoder<ContentLocation> | null = null;

/**
 * @summary Encodes a(n) ContentLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ContentLocation (value: ContentLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContentLocation) { _cached_encoder_for_ContentLocation = function (value: ContentLocation, elGetter: $.ASN1Encoder<ContentLocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.contentLocationURI, $.BER);
    if (value.statusCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.statusCount, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContentLocation(value, elGetter);
}


/* eslint-enable */
